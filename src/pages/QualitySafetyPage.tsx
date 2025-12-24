import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Shield, Award, CheckCircle, Target, HardHat, FileCheck, AlertTriangle, Clipboard } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const safetyStats = [
  { number: "1M+", label: "Safe Work Hours" },
  { number: "0", label: "Major Incidents" },
  { number: "100%", label: "Safety Compliance" },
  { number: "50+", label: "Happy Client" },
];

const certifications = [
  "ISO 9001:2015 - Quality Management",
  "ISO 14001:2015 - Environmental Management",
  "ISO 45001:2018 - Occupational Health & Safety",
  "OHSAS 18001 - Occupational Health & Safety",
];

const safetyPractices = [
  { icon: HardHat, title: "PPE Compliance", description: "Mandatory personal protective equipment for all site personnel." },
  { icon: FileCheck, title: "Safety Audits", description: "Regular safety audits and inspections at all project sites." },
  { icon: AlertTriangle, title: "Risk Assessment", description: "Comprehensive risk assessment before project commencement." },
  { icon: Clipboard, title: "Safety Training", description: "Continuous safety training programs for all employees." },
];

const QualitySafetyPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Quality & Safety" 
          subtitle="Uncompromising standards in every project we undertake"
        />

        {/* Safety Stats */}
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
              <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">Safety First</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
                Our Safety Record
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {safetyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">Quality Assurance</p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-6">
                  Our Quality Standards
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We maintain rigorous quality control processes throughout every phase of construction, 
                  ensuring that our projects meet and exceed industry standards and client expectations.
                </p>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <Award className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {safetyPractices.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-elevated transition-all"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <practice.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-primary mb-2">{practice.title}</h3>
                    <p className="text-muted-foreground text-sm">{practice.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default QualitySafetyPage;
