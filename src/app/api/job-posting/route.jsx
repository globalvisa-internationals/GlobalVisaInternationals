// src/app/api/job-posting/route.js
import { Resend } from "resend";
import { Readable } from "stream";

const resend = new Resend(process.env.RESEND_API_KEY);

// Convert Web ReadableStream to Node Readable stream
function toNodeReadable(webReadable) {
  return Readable.from(webReadable);
}

async function parseForm(request) {
  const formidable = (await import("formidable")).default;
  const form = formidable({ keepExtensions: true });

  const headers = {};
  request.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });

  const stream = toNodeReadable(request.body);
  stream.headers = headers;
  stream.method = "POST";
  stream.url = "/api/job-posting";

  return new Promise((resolve, reject) => {
    form.parse(stream, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(request) {
  try {
    const { fields, files } = await parseForm(request);

    // Prepare attachments (resume)
    let attachments = [];
    const resumeFile = files.resume?.[0];

    if (resumeFile) {
      const fs = await import("fs/promises");
      const resumeBuffer = await fs.readFile(resumeFile.filepath);

      attachments.push({
        filename: resumeFile.originalFilename,
        content: resumeBuffer.toString("base64"),
        type: resumeFile.mimetype,
      });
    }

    // Build message HTML based on JobForm fields
    const message = `
      <h2>New Job Application Received</h2>
      <p><strong>Name:</strong> ${fields.name || "Not provided"}</p>
      <p><strong>Email:</strong> ${fields.email || "Not provided"}</p>
      <p><strong>Phone:</strong> ${fields.phone || "Not provided"}</p>
      <p><strong>Experience:</strong> ${fields.experience || "Not provided"}</p>
      <p><strong>Gender:</strong> ${fields.gender || "Not provided"}</p>
      <p><strong>Education:</strong> ${fields.education || "Not provided"}</p>
      <p><strong>Applying For:</strong> ${fields.jobTitle || "Not provided"}</p>
    `;

    // Send email via Resend
    await resend.emails.send({
      from: `Global Visa Intl <${process.env.FROM_EMAIL}>`,
      to: [process.env.TO_EMAIL],
      subject: "New Job Application Received",
      html: message,
      attachments,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("❌ Job Application email failed:", error);
    return Response.json(
      { success: false, message: "Job Application email failed." },
      { status: 500 }
    );
  }
}
