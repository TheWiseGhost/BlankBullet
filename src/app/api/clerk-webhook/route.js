// src/app/api/clerk-webhook/route.js
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection string
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    // Parse the incoming request to get user data
    const body = await req.json();
    const { id, email_addresses, first_name, last_name, image_url } =
      body?.data;

    // Connect to MongoDB
    await client.connect();
    const db = client.db("DropFast");
    const usersCollection = db.collection("Users");

    // Prepare the data to insert
    const userData = {
      clerk_id: id, // Assuming you pass the Clerk ID in the request body
      name: `${first_name} ${last_name}` || "",
      email: email_addresses[0]?.email_address,
      created_at: new Date(),
      profile_picture: image_url || "", // Profile picture URL from the request body
      num_drops: 3,
      num_active_drops: 0,
    };

    // Insert the user data into the Users collection
    const result = await usersCollection.insertOne(userData);

    return NextResponse.json(
      { message: "User added successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}
