import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

let cachedClient = null;

async function connectToDatabase() {
  if (!cachedClient) {
    cachedClient = new MongoClient(process.env.MONGO_URI);
    await cachedClient.connect();
  }
  return cachedClient.db("BlankBullet");
}

export async function POST(req) {
  try {
    // Parse the incoming request to get user data
    const body = await req.json();
    const { id, email_addresses, first_name, last_name, image_url } =
      body?.data;

    // Validate the request body
    if (!id || !email_addresses || email_addresses.length === 0) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    // Connect to MongoDB
    const db = await connectToDatabase();
    const usersCollection = db.collection("Users");

    // Prepare the data to insert
    const userData = {
      clerk_id: id,
      name: `${first_name || ""} ${last_name || ""}`.trim(),
      email: email_addresses?.[0]?.email_address || "",
      created_at: new Date(),
      profile_picture: image_url || "",
      num_drops: 3,
      num_active_drops: 0,
    };

    // Insert the user data into the Users collection
    const result = await usersCollection.insertOne(userData);

    if (result.insertedId) {
      return NextResponse.json(
        { message: "User added successfully", userId: result.insertedId },
        { status: 200 }
      );
    } else {
      throw new Error("Failed to insert user");
    }
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
