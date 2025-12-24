import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { CheckCircle, Target, Eye, Award, Users, Clock, Shield } from "lucide-react";
import teamImage from "@/assets/team-construction.jpg";
import heroImage from "@/assets/hero-construction.jpg";

const timeline = [
  { year: "2015", title: "Founded", description: "Nadendla Constructions established with a vision to transform the construction industry." },
  { year: "2005", title: "Major Expansion", description: "Expanded operations to include industrial plants and infrastructure projects." },
  { year: "2012", title: "ISO Certification", description: "Achieved ISO 9001:2008 certification for quality management systems." },
  { year: "2018", title: "500+ Projects", description: "Milestone of completing over 500 successful projects across various sectors." },
  { year: "2023", title: "Industry Leader", description: "Recognized as one of the leading construction companies in the region." },
];

const values = [
  { icon: Target, title: "Excellence", description: "We strive for excellence in every project we undertake." },
  { icon: Shield, title: "Integrity", description: "Honest and transparent dealings with all stakeholders." },
  { icon: Users, title: "Teamwork", description: "Collaborative approach to achieve common goals." },
  { icon: Clock, title: "Timeliness", description: "Committed to delivering projects on schedule." },
];

const AboutPage = () => {
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="About Us" 
          subtitle="Building landmarks and transforming communities since 2015"
        />

        {/* Company Story */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-6">
                  A Legacy of Excellence in Construction
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Founded in 2015, Nadendla Constructions has grown from a small construction 
                  firm to one of the region's most trusted names in industrial and infrastructure 
                  development. Our journey is marked by an unwavering commitment to quality, 
                  innovation, and client satisfaction.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, we lead major industrial projects, employing cutting-edge technology 
                  and sustainable practices. Our team of 150+ experts brings decades of 
                  combined experience to every project.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <Parallax speed={5}>
                  <img
                    src={teamImage}
                    alt="Our team"
                    className="rounded-lg shadow-elevated w-full"
                  />
                </Parallax>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0">
            <Parallax speed={-10} className="absolute inset-0 h-[120%] -top-[10%]">
              <img src={heroImage} alt="Background" className="w-full h-full object-cover" />
            </Parallax>
            <div className="absolute inset-0 bg-primary/95" />
          </div>

          <div className="container-custom mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
              >
                <Eye className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Our Vision</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To be the most trusted and innovative construction company, setting benchmarks 
                  in quality, safety, and sustainability while contributing to the nation's 
                  infrastructure growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
              >
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Our Mission</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To deliver world-class construction solutions with integrity, innovation, 
                  and excellence, ensuring complete client satisfaction while maintaining 
                  the highest standards of safety and sustainability.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-secondary" ref={timelineRef}>
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">Our Journey</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4">
                Growth Timeline
              </h2>
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30" />
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card p-6 rounded-lg border border-border shadow-soft">
                      <span className="text-accent font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-heading font-bold text-primary mt-2">{item.title}</h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-accent z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background" ref={valuesRef}>
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">What We Believe</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="text-center bg-card p-8 rounded-xl border border-border hover:border-accent/30 hover:shadow-elevated transition-all"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
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

export default AboutPage;
