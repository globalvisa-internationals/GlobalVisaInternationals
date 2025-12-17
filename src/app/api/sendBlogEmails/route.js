// import clientPromise from "@/lib/mongodb";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//     try {
//         const { title, description, image, slug } = await req.json();

//         if (!title || !description || !slug) {
//             return new Response(JSON.stringify({ error: "Missing blog data" }), { status: 400 });
//         }

//         // 1. Connect to MongoDB
//         const client = await clientPromise;
//         const db = client.db("blogDB");
//         const subscribers = await db.collection("subscribers").find().toArray();

//         if (subscribers.length === 0) {
//             return new Response(JSON.stringify({ message: "No subscribers found" }), { status: 200 });
//         }

//         // 2. Setup mail transporter (Gmail SMTP example, replace with your own)
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER, // your Gmail
//                 pass: process.env.EMAIL_PASS, // app password
//             },
//         });

//         // 3. Loop through subscribers and send email
//         const sendPromises = subscribers.map((sub) =>
//             transporter.sendMail({
//                 from: `"Global Visa Internationals" <${process.env.EMAIL_USER}>`,
//                 to: sub.email,
//                 subject: `📢 New Blog: ${title}`,
//                 html: `
//           <div style="font-family: Arial, sans-serif; padding: 20px;">
//             <h2>${title}</h2>
//             <p>${description}</p>
//             <img src="${image}" alt="${title}" style="max-width: 100%; border-radius: 8px;" />
//             <br/>
//             <a href="${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}"
//                style="display: inline-block; margin-top: 12px; padding: 10px 16px;
//                       background: #0070f3; color: white; text-decoration: none; border-radius: 6px;">
//               👉 Read Full Blog
//             </a>
//           </div>
//         `,
//             })
//         );

//         await Promise.all(sendPromises);

//         return new Response(JSON.stringify({ success: true, sent: subscribers.length }), { status: 200 });
//     } catch (error) {
//         console.error("Email send error:", error);
//         return new Response(JSON.stringify({ error: "Email send failed" }), { status: 500 });
//     }
// }
