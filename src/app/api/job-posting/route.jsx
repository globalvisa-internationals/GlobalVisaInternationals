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
  stream.url = "/api/job-posting"; // needed by formidable

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

    // Extract file
    const resumeFile = files.resume?.[0];
    let attachments = [];

    if (resumeFile) {
      const fs = await import("fs/promises");
      const resumeBuffer = await fs.readFile(resumeFile.filepath);

      attachments.push({
        filename: resumeFile.originalFilename,
        content: resumeBuffer.toString("base64"),
        type: resumeFile.mimetype, // <-- important for Resend
      });
    }

    // Send email via Resend
    await resend.emails.send({
      from: "Global Visa <onboarding@resend.dev>",
      to: process.env.EMAIL_TO,
      subject: "New Job Application Received",
      text: `
New Job Application Received ✅

Name: ${fields.name}
Email: ${fields.email}
Phone: ${fields.phone}
DOB: ${fields.dob}
Age: ${fields.age}
Experience: ${fields.experience}
Education: ${fields.education}
Job Title: ${fields.jobTitle}
      `,
      attachments,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return Response.json(
      { success: false, message: "Email sending failed." },
      { status: 500 }
    );
  }
}
