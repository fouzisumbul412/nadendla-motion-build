import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { Factory, Building, HardHat, Wrench, Ruler, Truck, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const services = [
  {
    icon: Factory,
    title: "Industrial Plants",
    description: "Complete industrial facility construction from design to commissioning with cutting-edge engineering.",
    features: ["Chemical Plants", "Manufacturing Units", "Power Plants", "Warehousing"],
  },
  {
    icon: Building,
    title: "Commercial Buildings",
    description: "Modern commercial spaces including offices, shopping complexes, and mixed-use developments.",
    features: ["Office Complexes", "Shopping Malls", "Hotels", "Mixed-Use Developments"],
  },
  {
    icon: HardHat,
    title: "Infrastructure",
    description: "Large-scale infrastructure projects including roads, bridges, and utilities development.",
    features: ["Roads & Highways", "Bridges", "Water Treatment", "Utilities"],
  },
  {
    icon: Wrench,
    title: "Renovation & Retrofit",
    description: "Modernization and renovation of existing structures with minimal operational disruption.",
    features: ["Structural Upgrades", "MEP Retrofitting", "Facade Renovation", "Seismic Strengthening"],
  },
  {
    icon: Ruler,
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery and budget optimization.",
    features: ["Planning & Scheduling", "Cost Management", "Quality Control", "Risk Management"],
  },
  // {
  //   icon: Truck,
  //   title: "Heavy Equipment",
  //   description: "State-of-the-art heavy machinery and equipment for efficient project execution.",
  //   features: ["Cranes & Lifts", "Earthmoving", "Concrete Equipment", "Transport Fleet"],
  // },
];

const ServicesPage = () => {
  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Our Services" 
          subtitle="Comprehensive construction solutions for industrial and commercial sectors"
        />

        {/* Services Grid */}
        <section className="section-padding bg-background" ref={servicesRef}>
          <div className="container-custom mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-8 hover:shadow-elevated hover:border-accent/30 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                      <service.icon className="h-8 w-8 text-accent group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0">
            <Parallax speed={-10} className="absolute inset-0 h-[120%] -top-[10%]">
              <img src={heroImage} alt="Background" className="w-full h-full object-cover" />
            </Parallax>
            <div className="absolute inset-0 bg-primary/95" />
          </div>

          <div className="container-custom mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
                What Sets Us Apart
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "15+", label: "Years Experience", desc: "Decades of industry expertise" },
                { number: "55+", label: "Projects Completed", desc: "Successful deliveries across sectors" },
                { number: "50+", label: "Happy Client ", desc: "Commitment to excellence" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-primary-foreground font-medium">{stat.label}</div>
                  <div className="text-primary-foreground/60 text-sm mt-1">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
