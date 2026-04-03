"use client";

import { motion } from "framer-motion";
import { Check, Settings, Shield, Hammer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateX: 60, y: 50, transformPerspective: 1200 },
    show: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200, transition: { type: "spring" as const, stiffness: 60 } },
  };

  const slideDown3D = {
    hidden: { opacity: 0, rotateX: -45, y: -50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const swingLeft3D = {
    hidden: { opacity: 0, rotateY: 45, x: 50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateY: 0, x: 0, transformPerspective: 1200, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" as const } },
  };

  const slideUp3D = {
    hidden: { opacity: 0, rotateX: 45, y: 50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-golden-sand overflow-x-hidden">
      
      {/* Header section */}
      <div className="bg-golden-charcoal text-golden-sand py-16 mb-16 ">
        <div className="container mx-auto px-4 text-center" style={{ perspective: "1000px" }}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideDown3D}
            style={{ transformStyle: "preserve-3d" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Our <span className="text-golden-gold">Services</span>
          </motion.h1>
          <div className="w-24 h-1 bg-golden-gold mx-auto mb-6"></div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={swingLeft3D}
            style={{ transformStyle: "preserve-3d" }}
            className="text-lg opacity-80 max-w-2xl mx-auto font-body"
          >
            Delivering excellence in wooden construction, bespoke furniture, and complete interior solutions tailored to your unique requirements.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-golden-charcoal/10 group relative overflow-hidden h-full flex flex-col" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-golden-charcoal/5 rounded-bl-[100px] z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-golden-charcoal text-golden-gold">
                <Hammer size={32} />
              </div>
              <h2 className="text-2xl font-heading font-bold text-golden-charcoal mb-4">Core Wood Works</h2>
              <p className="text-golden-charcoal/70 mb-6 font-body leading-relaxed flex-grow">
                Complete wooden structural and aesthetic work starting from raw materials. We handle blanks, round logs, and precision kadasal works.
              </p>
              <ul className="space-y-3 font-body text-golden-charcoal/80">
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Frames & Thresholds</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Custom Cut Sizes</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Intricate Carving Designs</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-golden-charcoal text-golden-sand rounded-2xl p-8 md:p-10 shadow-xl border border-golden-gold/20 group relative overflow-hidden h-full flex flex-col" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-golden-gold/10 rounded-bl-[100px] z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full font-heading font-bold text-3xl italic bg-golden-gold text-golden-charcoal">
                F
              </div>
              <h2 className="text-2xl font-heading font-bold text-golden-sand mb-4">Custom & Standard Furniture</h2>
              <p className="text-golden-sand/80 mb-6 font-body leading-relaxed flex-grow">
                Bring your vision to life. We manufacture standard sized pieces or exact customized replicas tailored for your space.
              </p>
              <ul className="space-y-3 font-body text-golden-sand/90">
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Full Manufacturer Warranty</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Imported & Local Timbers</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Traditional & Modern Designs</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-golden-charcoal/10 group relative overflow-hidden h-full flex flex-col" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-golden-charcoal/5 rounded-bl-[100px] z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full font-heading font-bold text-3xl bg-golden-charcoal text-golden-gold">
                D
              </div>
              <h2 className="text-2xl font-heading font-bold text-golden-charcoal mb-4">Premium Doors & Windows</h2>
              <p className="text-golden-charcoal/70 mb-6 font-body leading-relaxed flex-grow">
                Make an entrance. We provide comprehensive solutions for all residential and commercial entryways.
              </p>
              <ul className="space-y-3 font-body text-golden-charcoal/80">
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Teak, Membrane & Skin Doors</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> UPVC Windows & Wooden Frames</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Complete Locks & Fittings</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-golden-charcoal/10 group relative overflow-hidden h-full flex flex-col" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-golden-charcoal/5 rounded-bl-[100px] z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-golden-charcoal text-golden-gold">
                <Settings size={32} />
              </div>
              <h2 className="text-2xl font-heading font-bold text-golden-charcoal mb-4">Complete Interior Fittings</h2>
              <p className="text-golden-charcoal/70 mb-6 font-body leading-relaxed flex-grow">
                Seamless implementation from concept to reality. We don't just supply wood; we give you the entire finished environment.
              </p>
              <ul className="space-y-3 font-body text-golden-charcoal/80">
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> End-to-end Installation</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Turnkey Projects</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-golden-gold" /> Quality Hardware Assurance</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Area */}
        <div style={{ perspective: "1000px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp3D}
            style={{ transformStyle: "preserve-3d" }}
            className="mt-20 bg-golden-charcoal border border-golden-gold rounded-2xl p-8 md:p-12 text-center shadow-xl"
          >
            <Shield className="mx-auto text-golden-gold mb-6" size={48} />
            <h2 className="text-3xl font-heading font-bold text-golden-sand mb-4">Don't see what you're looking for?</h2>
            <p className="text-golden-sand/80 font-body mb-8 max-w-xl mx-auto">
              Our name says it all: A to Z Wooden Construction. Contact us with your specific requirements and we will make it happen.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-golden-gold text-golden-charcoal px-8 py-4 rounded font-semibold hover:bg-yellow-500 transition-colors"
            >
              Get a Custom Quote
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
