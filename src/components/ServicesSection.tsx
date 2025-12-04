import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Building, 
  Factory, 
  HardHat, 
  Wrench, 
  Ruler, 
  Truck,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Industrial Plants",
    description: "Complete industrial facility construction from design to commissioning with cutting-edge engineering.",
  },
  {
    icon: Building,
    title: "Commercial Buildings",
    description: "Modern commercial spaces including offices, shopping complexes, and mixed-use developments.",
  },
  {
    icon: HardHat,
    title: "Infrastructure",
    description: "Large-scale infrastructure projects including roads, bridges, and utilities development.",
  },
  {
    icon: Wrench,
    title: "Renovation & Retrofit",
    description: "Modernization and renovation of existing structures with minimal operational disruption.",
  },
  {
    icon: Ruler,
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery and budget optimization.",
  },
  {
    icon: Truck,
    title: "Heavy Equipment",
    description: "State-of-the-art heavy machinery and equipment for efficient project execution.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive construction solutions tailored to meet the unique needs 
            of industrial and commercial sectors.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-elevated hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-8 w-8 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-accent font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
