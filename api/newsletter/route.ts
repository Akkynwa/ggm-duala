// app/api/newsletter/route.ts
import { NextResponse } from "next/server";
import * as z from "zod";

const newsletterSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = newsletterSchema.parse(body);

    // Here you would typically:
    // - Add to mailing list (Mailchimp, SendGrid, etc.)
    // - Store in database
    // - Send welcome email
    // Example: await addToMailingList(validatedData);
    // Example: await db.newsletter.create({ data: validatedData });

    console.log("Newsletter subscription:", validatedData);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: "You've been subscribed successfully! Check your email for confirmation.",
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

    console.error("Newsletter error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}