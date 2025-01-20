import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_APP_SMTP_HOST,
      port: Number(process.env.NEXT_APP_SMTP_PORT),
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.NEXT_APP_SMTP_USER,
        pass: process.env.NEXT_APP_SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `${process.env.SMTP_USER}`,
      to: email,
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email", details: error }, { status: 500 });
  }
}
