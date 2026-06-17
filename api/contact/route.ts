// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Here you would typically:
    // - Send an email notification
    // - Store in a database
    // - Forward to a CRM
    // Example: await sendEmail(validatedData);
    // Example: await db.contact.create({ data: validatedData });

    console.log("Contact form submission:", validatedData);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll get back to you soon.",
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

    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}