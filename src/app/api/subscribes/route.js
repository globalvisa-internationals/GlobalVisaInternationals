// import clientPromise from "@/lib/mongodb";

// export async function POST(req) {
//     try {
//         const { email } = await req.json();

//         if (!email || !email.includes("@")) {
//             return new Response(
//                 JSON.stringify({ error: "Invalid email" }),
//                 { status: 400 }
//             );
//         }

//         const mongoClient = await clientPromise;
//         const db = mongoClient.db("newsletter"); // database name
//         const collection = db.collection("subscribers");

//         // ✅ Prevent duplicate subscriptions
//         const existing = await collection.findOne({ email });
//         if (existing) {
//             return new Response(
//                 JSON.stringify({ success: false, error: "You’re already subscribed!" }),
//                 { status: 200 }
//             );
//         }

//         await collection.insertOne({
//             email,
//             subscribedAt: new Date(),
//         });

//         return new Response(JSON.stringify({ success: true }), { status: 201 });
//     } catch (error) {
//         console.error(error);
//         return new Response(
//             JSON.stringify({ success: false, error: "Server error" }),
//             { status: 500 }
//         );
//     }
// }
