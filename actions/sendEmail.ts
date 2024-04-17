"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data = null;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'anasbilal1122786@gmail.com',
            subject: 'Message from Contact Form',
            reply_to: senderEmail?.toString(),
            text: message,
            react: React.createElement(ContactFormEmail, { message, senderEmail })
        });
    } catch (error: unknown) {
        return { error: getErrorMessage(error) }
    }
    return { data }
}