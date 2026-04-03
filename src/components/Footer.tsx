import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-golden-charcoal text-golden-sand py-12 border-t-4 border-golden-gold mt-auto">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-2xl text-golden-gold mb-4 font-bold border-b border-golden-gold/30 pb-2 inline-block">
            Golden Interior Decors
          </h3>
          <p className="font-body text-sm leading-relaxed max-w-sm mb-6 text-golden-sand/80">
            A to Z Wooden Construction & Interior Solutions. We specialize in custom furniture, 
            premium doors, windows, and complete woodworks. Home of imported premium timber.
          </p>
          <div className="flex gap-4">
            <span className="text-xs bg-golden-green/20 text-golden-sand py-1 px-3 rounded-full border border-golden-green/30">
              Pan-India Delivery
            </span>
            <span className="text-xs bg-golden-gold/20 text-golden-gold py-1 px-3 rounded-full border border-golden-gold/30">
              Manufacturer Warranty
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-4 text-golden-gold">Quick Links</h4>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <Link href="/services" className="hover:text-golden-gold transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-golden-gold rounded-full"></span> Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-golden-gold transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-golden-gold rounded-full"></span> Portfolio Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-golden-gold transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-golden-gold rounded-full"></span> About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-golden-gold transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-golden-gold rounded-full"></span> Contact & Bookings
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-4 text-golden-gold">Get in Touch</h4>
          <ul className="space-y-4 font-body text-sm">
            <li className="flex items-start gap-4 text-golden-sand/80">
              <MapPin className="text-golden-gold mt-1 shrink-0" size={20} />
              <span>
                261/1A, Keeranur Main Road,<br />
                Periya Suriyur, Trichy – 620 025
              </span>
            </li>
            <li className="flex items-center gap-4 text-golden-sand/80 hover:text-golden-gold transition-colors">
              <Phone className="text-golden-gold shrink-0" size={20} />
              <a href="tel:+917010788702">+91 70107 88702</a>
            </li>
            <li className="flex items-center gap-4 text-golden-sand/80 hover:text-golden-gold transition-colors">
              <Phone className="text-green-500 shrink-0" size={20} />
              <a href="https://wa.me/917010788702" target="_blank" rel="noopener noreferrer">WhatsApp: 70107 88702</a>
            </li>
            <li className="flex items-center gap-4 text-golden-sand/80">
              <span className="font-semibold text-golden-gold uppercase text-xs tracking-wider">Owner:</span>
              <span>M. Daniel</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-golden-sand/10 text-center flex flex-col items-center justify-center">
        <p className="text-xs text-golden-sand/60">
          &copy; {new Date().getFullYear()} Golden Interior Decors. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
