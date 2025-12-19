import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/nadendla-logo.png";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Industrial Plants",
  "Commercial Buildings",
  "Infrastructure",
  "Renovation",
];

export const Footer = () => {
  // scrollToTop function for smooth top scroll
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a onClick={scrollToTop} href="/" className="cursor-pointer inline-block">
              <img
                src={logo}
                alt="Nadendla Constructions"
                className="h-20 w-auto mb-2 bg-transparent rounded p-2"
              />
            </a>

            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Nadendla Constructions Pvt. Ltd. - Building landmark futures with
              precision, quality, and trust since 1998.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  onClick={scrollToTop}
                  href="/"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary-foreground transition-all cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={scrollToTop}
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    onClick={scrollToTop}
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/70">
                  123 Industrial Estate,
                  <br />
                  Hyderabad, Telangana 500001
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  onClick={scrollToTop}
                  href="tel:+919876543210"
                  className="text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  onClick={scrollToTop}
                  href="mailto:info@nadendla.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer"
                >
                  info@nadendla.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Nadendla Constructions Pvt. Ltd. All rights reserved.  Powered by <a href="https://www.outrightcreators.com/">Outright Creators</a>
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="/privacy-policy"
                onClick={scrollToTop}
                className="text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                onClick={scrollToTop}
                className="text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
