import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-construction.jpg";

const features = [
  "Deliver ultimate industrial services",
  "Committed to serve you better",
  "World's best engineering team",
  "No hidden extra charges",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">
              Building with Integrity and Excellence!
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary mb-6">
              Committed To High Quality
              <br />
              Industrial Services!
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nadendla Constructions is a leading construction company specializing in 
              industrial plants, infrastructure development, and large-scale commercial 
              projects. With over 25 years of experience, we transform visions into 
              landmark structures.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="accent" size="lg">
              More About Us
            </Button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={teamImage}
                alt="Our construction team"
                className="rounded-lg shadow-elevated w-full"
              />
              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                className="absolute -bottom-8 -left-8 bg-accent text-primary-foreground p-6 rounded-lg shadow-accent"
              >
                <Building2 className="h-8 w-8 mb-2" />
                <div className="text-4xl font-heading font-bold">25</div>
                <div className="text-sm font-medium">Years Of<br />Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
