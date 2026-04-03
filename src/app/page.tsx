"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, Factory } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const slideUp3D = {
    hidden: { opacity: 0, rotateX: 45, y: 50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const slideDown3D = {
    hidden: { opacity: 0, rotateX: -45, y: -50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const swingLeft3D = {
    hidden: { opacity: 0, rotateY: 45, x: 50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateY: 0, x: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const swingRight3D = {
    hidden: { opacity: 0, rotateY: -45, x: -50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateY: 0, x: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-golden-charcoal ">
        <div className="absolute inset-0 bg-gradient-to-r from-golden-charcoal/90 to-golden-charcoal/40 z-0"></div>
        
        {/* Placeholder background image */}
        <div className="absolute inset-0 opacity-30 z-0 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Wood Interior"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6" style={{ perspective: "1200px" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.p variants={slideDown3D} className="text-golden-gold font-body uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-semibold">
              Premium Quality • Unmatched Craftsmanship
            </motion.p>
            <motion.h1 variants={swingRight3D} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-golden-sand leading-tight mb-6">
              A to Z Wooden Construction & <span className="text-golden-gold">Interior Solutions</span>
            </motion.h1>
            <motion.p variants={swingLeft3D} className="text-lg md:text-xl text-golden-sand/90 font-body mb-8 max-w-2xl leading-relaxed">
              Transforming spaces with premium imported wood, standard & customized furniture, and complete interior fittings.
            </motion.p>
            <motion.div variants={slideUp3D} className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/917010788702"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-golden-gold text-golden-charcoal px-8 py-4 rounded-sm font-semibold text-lg hover:bg-yellow-500 transition-colors shadow-lg flex items-center gap-2 group"
              >
                Discuss Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <Link
                href="/portfolio"
                className="border border-golden-gold text-golden-gold px-8 py-4 rounded-sm font-semibold text-lg hover:bg-golden-gold/10 transition-colors backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-golden-sand overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto" style={{ perspective: "1500px" }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideDown3D}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-golden-charcoal mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-golden-gold mx-auto mb-6"></div>
            <p className="text-golden-charcoal/80 font-body text-lg">
              From raw materials to finished masterpieces, we provide comprehensive interior and structural wood solutions.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            {[
              { title: "Premium Wood Works", desc: "Raw materials, frames, cutting, blanks, and intricate carving designs.", icon: <Factory size={32} /> },
              { title: "Custom Furniture", desc: "Standard and custom-made furniture built to your exact specifications.", icon: <div className="text-3xl font-heading italic">F</div> },
              { title: "Doors & UPVC", desc: "Teak, membrane, PVC doors, UPVC windows, and complete hardware fittings.", icon: <div className="text-3xl font-heading">D</div> },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={slideUp3D}
                whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                className="bg-white p-8 rounded-xl shadow-md border border-golden-charcoal/10 group cursor-pointer relative z-10 hover:z-20 hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-golden-charcoal/5 text-golden-gold flex items-center justify-center mb-6 group-hover:bg-golden-gold group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-golden-charcoal mb-3">{service.title}</h3>
                <p className="text-golden-charcoal/70 font-body mb-6">{service.desc}</p>
                <Link href="/services" className="text-golden-gold font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Golden? Trust Section */}
      <section className="py-24 bg-golden-charcoal text-golden-sand relative overflow-hidden ">
        <div className="container px-4 md:px-6 mx-auto relative z-10" style={{ perspective: "1500px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={swingRight3D}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-golden-sand mb-6 leading-tight">
                Why Choose <span className="text-golden-gold">Golden Interior Decors?</span>
              </h2>
              <p className="text-lg text-golden-sand/80 mb-10 font-body leading-relaxed">
                With exclusive dealers from Burma, Ghana, Malaysia, and Columbia, we ensure the highest quality timber. 
                Our commitment to craftsmanship and customer satisfaction sets us apart in the industry.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Manufacturer Warranty", desc: "Guaranteed quality and durability for all our products.", icon: <ShieldCheck className="text-golden-gold mr-4" size={28} /> },
                  { title: "Pan-India Delivery", desc: "Safe transportation, loading, and parcel services across the country.", icon: <Truck className="text-golden-gold mr-4" size={28} /> },
                  { title: "Imported Premium Wood", desc: "Authentic timber sourced from world-class dealers globally.", icon: <CheckCircle2 className="text-golden-gold mr-4" size={28} /> },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-heading text-xl font-bold mb-1">{feature.title}</h4>
                      <p className="text-golden-sand/70 text-sm font-body">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, rotateY: -30, x: 50, transformPerspective: 1200 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0, transformPerspective: 1200 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" as const }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-golden-gold/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                alt="Wood Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-golden-charcoal via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-golden-charcoal/90 backdrop-blur-md p-6 border-l-4 border-golden-gold rounded-r-lg">
                <p className="font-heading text-xl text-golden-sand italic">
                  "Excellence in every grain, perfection in every cut."
                </p>
                <p className="mt-2 text-golden-gold font-semibold uppercase text-sm tracking-wider">— M. Daniel, Owner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
