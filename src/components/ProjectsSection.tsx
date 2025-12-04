import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const categories = ["All Projects", "Industrial", "Commercial", "Residential"];

const projects = [
  {
    id: 1,
    title: "Skyline Towers",
    category: "Residential",
    image: project1,
    description: "Luxury residential complex with 200 units",
  },
  {
    id: 2,
    title: "Industrial Complex A",
    category: "Industrial",
    image: project2,
    description: "Large-scale manufacturing facility",
  },
  {
    id: 3,
    title: "Corporate Plaza",
    category: "Commercial",
    image: project3,
    description: "Modern office space with LEED certification",
  },
  {
    id: 4,
    title: "Metro Station Hub",
    category: "Industrial",
    image: project1,
    description: "Transit infrastructure development",
  },
  {
    id: 5,
    title: "Tech Park Campus",
    category: "Commercial",
    image: project2,
    description: "IT park with sustainable design",
  },
  {
    id: 6,
    title: "Green Residency",
    category: "Residential",
    image: project3,
    description: "Eco-friendly housing project",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = activeFilter === "All Projects"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-primary" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground">
              Recent Projects
            </h2>
          </div>
          <p className="text-primary-foreground/70 max-w-xl text-lg">
            Explore our diverse portfolio of landmark projects spanning industrial, 
            commercial, and residential sectors.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === category
                  ? "bg-accent text-primary-foreground"
                  : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-sm font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-primary-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-accent font-semibold text-sm">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                {/* Hover Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0">
                  <Search className="h-5 w-5 text-primary-foreground" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
