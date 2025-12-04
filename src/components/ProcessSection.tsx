import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Research & Analysis",
    description: "We begin with thorough research and analysis of your project requirements, site conditions, and objectives to develop a comprehensive plan.",
  },
  {
    number: "2",
    icon: Settings,
    title: "Industry Development",
    description: "Our expert team develops detailed engineering solutions, optimizing for efficiency, safety, and sustainability throughout the construction process.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Production Launch",
    description: "We execute the project with precision, ensuring timely delivery while maintaining the highest standards of quality and safety.",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach that ensures every project is delivered with 
            excellence, on time, and within budget.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-muted-foreground/30" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Icon Container */}
              <div className="relative inline-block mb-8">
                <div className="w-32 h-32 rounded-full border-2 border-accent/30 flex items-center justify-center mx-auto bg-background">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                    <step.icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-accent">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
