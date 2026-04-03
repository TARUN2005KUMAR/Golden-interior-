"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase correctly. In real production, check if anon key exists.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Check if real keys are provided, else simulate success for demo
      if (supabaseAnonKey === "placeholder-key" || !supabaseAnonKey) {
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus("success");
      } else {
        const { error } = await supabase
          .from("contacts")
          .insert([
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: formData.message,
            },
          ]);

        if (error) throw error;
        setSubmitStatus("success");
      }
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
      
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(error.message || "Failed to submit message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideDown3D = {
    hidden: { opacity: 0, rotateX: -45, y: -50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const swingRight3D = {
    hidden: { opacity: 0, rotateY: -45, x: -50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateY: 0, x: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const swingLeft3D = {
    hidden: { opacity: 0, rotateY: 45, x: 50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateY: 0, x: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const slideUp3D = {
    hidden: { opacity: 0, rotateX: 45, y: 50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-golden-sand overflow-x-hidden">
      
      {/* Header section */}
      <div className="bg-golden-charcoal text-golden-sand py-16 mb-16" style={{ perspective: "1500px" }}>
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideDown3D}
            style={{ transformStyle: "preserve-3d" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Get in <span className="text-golden-gold">Touch</span>
          </motion.h1>
          <div className="w-24 h-1 bg-golden-gold mx-auto mb-6"></div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp3D}
            style={{ transformStyle: "preserve-3d" }}
            className="text-lg opacity-80 max-w-2xl mx-auto font-body"
          >
            Looking to discuss a custom furniture piece or complete interior project? We are here to help bring your vision to life.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6" style={{ perspective: "2000px" }}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={swingRight3D}
            style={{ transformStyle: "preserve-3d" }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-3xl font-heading font-bold text-golden-charcoal mb-8">Contact Details</h2>
            
            <div className="space-y-8">
              <div className="flex items-start bg-white p-6 rounded-xl shadow-md border border-golden-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-golden-charcoal/5 flex flex-shrink-0 items-center justify-center mr-4 text-golden-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-golden-charcoal mb-2">Location</h3>
                  <p className="text-golden-charcoal/70 font-body leading-relaxed">
                    261/1A, Keeranur Main Road,<br />
                    Periya Suriyur,<br />
                    Trichy – 620 025,<br />
                    Tamil Nadu.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl shadow-md border border-golden-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-golden-charcoal/5 flex flex-shrink-0 items-center justify-center mr-4 text-golden-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-golden-charcoal mb-2">Phone / WhatsApp</h3>
                  <a href="tel:+917010788702" className="text-golden-charcoal/70 font-body hover:text-golden-gold transition-colors block mb-1">
                    +91 70107 88702
                  </a>
                  <p className="text-golden-charcoal/70 font-body text-sm font-semibold mt-2">M. Daniel (Owner)</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl shadow-md border border-golden-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-golden-charcoal/5 flex flex-shrink-0 items-center justify-center mr-4 text-golden-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-golden-charcoal mb-2">Working Hours</h3>
                  <p className="text-golden-charcoal/70 font-body mb-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-golden-charcoal/70 font-body">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={swingLeft3D}
            style={{ transformStyle: "preserve-3d" }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-golden-charcoal/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-golden-charcoal/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <h2 className="text-3xl font-heading font-bold text-golden-charcoal mb-2 relative z-10">Send a Message</h2>
              <p className="text-golden-charcoal/60 font-body mb-8 relative z-10">We usually respond within 24 hours.</p>
              
              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl flex flex-col items-center justify-center text-center h-[400px]"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-heading font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700 font-body">
                      Thank you for reaching out. We have received your message and will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitStatus("idle")}
                      className="mt-8 px-6 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6 relative z-10"
                  >
                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm font-body">
                        {errorMessage}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-golden-charcoal/80">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-golden-charcoal/20 focus:border-golden-gold focus:ring-2 focus:ring-golden-gold/20 outline-none transition-all bg-golden-sand/30"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-golden-charcoal/80">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-golden-charcoal/20 focus:border-golden-gold focus:ring-2 focus:ring-golden-gold/20 outline-none transition-all bg-golden-sand/30"
                          placeholder="+91"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-golden-charcoal/80">Email Address (Optional)</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-golden-charcoal/20 focus:border-golden-gold focus:ring-2 focus:ring-golden-gold/20 outline-none transition-all bg-golden-sand/30"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-golden-charcoal/80">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-golden-charcoal/20 focus:border-golden-gold focus:ring-2 focus:ring-golden-gold/20 outline-none transition-all bg-golden-sand/30 resize-y"
                        placeholder="Tell us about your project requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-golden-charcoal text-golden-sand py-4 rounded-md font-semibold text-lg hover:bg-black transition-colors flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="animate-spin mr-2" size={20} /> Sending...</>
                      ) : (
                        <><Send className="mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={20} /> Send Message</>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
