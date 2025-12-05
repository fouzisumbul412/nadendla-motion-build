import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, Kumar Industries",
    content:
      "Nadendla Constructions delivered our industrial facility ahead of schedule. Their attention to detail and commitment to quality is unmatched. Highly recommended for any large-scale construction project.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Managing Director, Sharma Enterprises",
    content:
      "Working with Nadendla was a seamless experience. Their team's expertise in commercial construction helped us create a workspace that truly reflects our brand. Outstanding work!",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Reddy",
    role: "Project Manager, Metro Corp",
    content:
      "The professionalism and technical excellence of Nadendla Constructions is remarkable. They handled our complex infrastructure project with utmost precision and delivered exceptional results.",
    rating: 5,
  },
];
const clientLogos = [
  "/assets/images/outright_creators_logo.jpg",
  "/assets/images/iron.jpg",
  "/assets/images/iron-3.avif",
  "/assets/images/iron-2.png",
  "/assets/images/ab-cement.jpg",
  "/assets/images/6.jpg",
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-heading font-bold text-primary uppercase tracking-wide">
                Testimonials
              </h2>
              <div className="h-1 w-12 bg-accent" />
            </div>

            <div className="relative">
              <Quote className="h-12 w-12 text-accent/30 mb-4" />

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg font-tagline italic text-muted-foreground mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <div>
                  <div className="font-heading font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center hover:border-accent hover:bg-accent hover:text-primary-foreground transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center hover:border-accent hover:bg-accent hover:text-primary-foreground transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-heading font-bold text-primary uppercase tracking-wide">
                Our Clients
              </h2>
              <div className="h-1 w-12 bg-accent" />
            </div>

            <div className="grid grid-cols-3 gap-6">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="aspect-square border border-border rounded-lg  flex items-center justify-center hover:border-accent/50 hover:shadow-soft transition-all bg-white"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition"
                  />
                </motion.div>
              ))}
            </div>

            <button className="mt-8 text-muted-foreground hover:text-accent font-semibold text-sm flex items-center gap-2 transition-colors">
              View All Our Clients
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
