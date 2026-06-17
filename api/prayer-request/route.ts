// app/api/prayer-request/route.ts
import { NextResponse } from "next/server";
import { prayerRequestSchema } from "@/lib/validations/prayer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = prayerRequestSchema.parse(body);

    // Here you would typically:
    // - Send to prayer team
    // - Store in database
    // - Send confirmation email
    // Example: await notifyPrayerTeam(validatedData);
    // Example: await db.prayerRequest.create({ data: validatedData });

    console.log("Prayer request submission:", {
      ...validatedData,
      request: validatedData.request.substring(0, 50) + "...",
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: "Your prayer request has been received. Our prayer team will be praying for you.",
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: JSON.parse(error.message),
        },
        { status: 400 }
      );
    }

    console.error("Prayer request error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}