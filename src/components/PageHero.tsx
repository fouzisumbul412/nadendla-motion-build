import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import heroImage from "@/assets/hero-construction.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative min-h-[63vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <Parallax speed={-20} className="absolute inset-0 h-[130%] -top-[15%]">
          <img
            src={backgroundImage || heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/30" />
        {/* Animated overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0 100V50C240 16.67 480 0 720 0C960 0 1200 16.67 1440 50V100H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};
