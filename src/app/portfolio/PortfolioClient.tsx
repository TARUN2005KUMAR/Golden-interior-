"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";

const filters = [
  { label: "All Works", value: "all" },
  { label: "Home Interior Works", value: "home_interior" },
  { label: "Modern Kitchens", value: "kitchen" },
  { label: "Elevations", value: "elevation" },
  { label: "Wood Work", value: "wood" },
  { label: "Doors", value: "door" },
  { label: "UPVC Profile Windows", value: "window" },
  { label: "Furniture", value: "furniture" },
];

export default function PortfolioClient({ projects }: { projects: any[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const slideDown3D = {
    hidden: { opacity: 0, rotateX: -45, y: -50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const slideUp3D = {
    hidden: { opacity: 0, rotateX: 45, y: 50, transformPerspective: 1200 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-golden-sand text-golden-charcoal overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12" style={{ perspective: "1500px" }}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideDown3D}
            style={{ transformStyle: "preserve-3d" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Our <span className="text-golden-gold">Portfolio</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp3D}
            style={{ transformStyle: "preserve-3d" }}
            className="text-lg opacity-80 max-w-2xl mx-auto font-body mb-8"
          >
            Explore our curated gallery of architectural woodworks, custom furniture, and interior fittings.
          </motion.p>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, rotateX: 45, y: 50, transformPerspective: 1200 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${activeFilter === filter.value
                  ? "bg-golden-charcoal text-golden-gold shadow-md"
                  : "bg-white text-golden-charcoal/70 hover:bg-golden-charcoal/5 border border-golden-charcoal/10"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid Simulation */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          style={{ perspective: "2000px" }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              // Resolve image URL with priority: asset.url > urlForImage builder > string fallback
              let imageUrl = "";
              if (typeof project.mainImage === "string") {
                imageUrl = project.mainImage; // Placeholder string URL
              } else if (project.mainImage?.asset?.url) {
                imageUrl = project.mainImage.asset.url; // Direct CDN URL from Sanity ✅
              } else if (project.mainImage) {
                imageUrl = urlForImage(project.mainImage)?.width(800).auto("format").url() || "";
              }

              if (!imageUrl) return null;

              const aspectClasses: Record<string, string> = {
                square: "aspect-square",
                portrait: "aspect-[3/4]",
                landscape: "aspect-[4/3]",
                video: "aspect-video"
              };
              const aspectClass = aspectClasses[project.aspectRatio] || "aspect-square";

              return (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, rotateX: 30, rotateY: 30, y: 100, scale: 0.8, transformPerspective: 1500 }}
                whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0, scale: 1, transformPerspective: 1500 }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, rotateX: -30, rotateY: -30, scale: 0.8, transformPerspective: 1500 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
                className="relative overflow-hidden rounded-xl group break-inside-avoid shadow-sm hover:shadow-2xl transition-shadow"
              >
                <div className={`relative w-full overflow-hidden ${aspectClass} bg-golden-charcoal/10`}>
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-golden-charcoal/90 via-golden-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-heading font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-golden-gold uppercase text-xs tracking-wider font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {filters.find(f => f.value === project.category)?.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            )})}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
