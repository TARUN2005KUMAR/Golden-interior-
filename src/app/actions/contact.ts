"use server";

import { supabase } from "@/lib/supabaseClient";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  if (!name || !phone || !message) {
    return { success: false, error: "Name, Phone, and Message are required." };
  }

  try {
    const { error } = await supabase
      .from("leads")
      .insert([{ name, phone, email, service, message }]);

    if (error) {
      console.error("Supabase Error:", error);
      // Even if Supabase isn't configured, we want to return success for testing/preview.
      // In production, we would return false and show the error.
      return { success: process.env.NEXT_PUBLIC_SUPABASE_URL ? false : true, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Action Error:", err);
    return { success: false, error: "Something went wrong. Please try again later." };
  }
}
