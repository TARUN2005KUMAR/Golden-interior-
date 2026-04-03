"use client";

import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Truck, Quote } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
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

  return (
    <div className="pt-24 pb-20 min-h-screen bg-golden-sand overflow-x-hidden">
      
      {/* Header section */}
      <section className="container mx-auto px-4 md:px-6 mb-20 text-center" style={{ perspective: "1000px" }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={slideDown3D}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-golden-charcoal mb-4">
            Our <span className="text-golden-gold">Story</span>
          </h1>
          <div className="w-24 h-1 bg-golden-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-golden-charcoal/80 font-body leading-relaxed">
            Founded by <span className="font-semibold text-golden-charcoal">M. Daniel</span>, Golden Interior Decors has grown from a passion for fine craftsmanship to a premier destination for complete A to Z wooden construction and interior solutions in Trichy.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 mb-24" style={{ perspective: "1500px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={swingRight3D}
            viewport={{ once: true, amount: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=1000&auto=format&fit=crop"
              alt="Wood Crafting Workshop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-golden-charcoal/20 mix-blend-overlay"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={swingLeft3D}
            viewport={{ once: true, amount: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-heading font-bold text-golden-charcoal">
              Craftsmanship Built on Trust
            </h2>
            <p className="text-golden-charcoal/80 font-body text-lg leading-relaxed">
              For years, we have specialized in transforming spaces with high-grade materials and exquisite designs. We understand that furniture and fittings are more than just functional pieces; they are the heart of your living environment.
            </p>
            <p className="text-golden-charcoal/80 font-body text-lg leading-relaxed">
              Every curve, every joint, and every polish is executed with precision. We pride ourselves on creating standard and customized furniture that reflects our clients' unique tastes while standing the test of time.
            </p>
            <div className="bg-golden-charcoal/5 border-l-4 border-golden-gold p-6 rounded-r-lg mt-8">
              <Quote className="text-golden-gold/40 mb-2" size={32} />
              <p className="font-heading italic text-xl text-golden-charcoal">
                "Our mission is to bring the timeless elegance and durability of premium wood into every home."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="bg-golden-charcoal text-golden-sand py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6" style={{ perspective: "1500px" }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Global Imports */}
            <motion.div variants={slideUp3D} style={{ transformStyle: "preserve-3d" }} className="text-center p-8 bg-black/10 rounded-xl shadow-lg border border-white/5">
              <div className="w-16 h-16 bg-golden-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe2 className="text-golden-gold" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Global Network</h3>
              <p className="text-golden-sand/80 font-body leading-relaxed">
                We bring the world's best timber to your doorstep. Our exclusive dealer network spans <span className="text-golden-gold font-semibold">Burma, Ghana, Malaysia, and Columbia</span>, guaranteeing authentic, premium raw materials for every project.
              </p>
            </motion.div>

            {/* Warranty */}
            <motion.div variants={slideUp3D} style={{ transformStyle: "preserve-3d" }} className="text-center p-8 relative bg-black/10 rounded-xl shadow-lg border border-white/5">
              <div className="w-16 h-16 bg-golden-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-golden-gold" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Assured Warranty</h3>
              <p className="text-golden-sand/80 font-body leading-relaxed">
                Quality you can rely on. All our standard and custom-made furniture pieces come with an ironclad <span className="text-golden-gold font-semibold">Manufacturer Warranty</span> to secure your investment for years to come.
              </p>
            </motion.div>

            {/* Delivery */}
            <motion.div variants={slideUp3D} style={{ transformStyle: "preserve-3d" }} className="text-center p-8 bg-black/10 rounded-xl shadow-lg border border-white/5">
              <div className="w-16 h-16 bg-golden-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-golden-gold" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Pan-India Delivery</h3>
              <p className="text-golden-sand/80 font-body leading-relaxed">
                Distance is no barrier to excellence. We offer comprehensive <span className="text-golden-gold font-semibold">Pan-India Delivery</span>, including safe transportation, specialized loading, and expert packing services.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
