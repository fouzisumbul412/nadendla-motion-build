import React, { useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Factory, Building, HardHat, Wrench, Ruler, Truck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Assets (Assuming these paths are correct in your project)
import factoryImage from "/assets/images/factory.jpg";
import buildingImage from "/assets/images/building.jpg";
import infrastructureImage from "/assets/images/infrastructure.jpg";
import renovationImage from "/assets/images/renovation.jpg";
import projectImage from "/assets/images/project.jpg";
import heavyEquipmentImage from "/assets/images/heavy-equipment.jpg";

const services = [
  {
    icon: <Factory />,
    title: "Industrial Plants",
    description:
      "Complete industrial facility construction from design to commissioning with cutting-edge engineering.",
    image: factoryImage,
  },
  {
    icon: <Building />,
    title: "Commercial Buildings",
    description:
      "Modern commercial spaces including offices, shopping complexes, and mixed-use developments.",
    image: buildingImage,
  },
  {
    icon: <HardHat />,
    title: "Infrastructure",
    description:
      "Large-scale infrastructure development including highways, bridges, and utilities.",
    image: infrastructureImage,
  },
  {
    icon: <Wrench />,
    title: "Renovation & Retrofit",
    description:
      "Modernization and renovation of existing structures with minimal operational disruption.",
    image: renovationImage,
  },
  {
    icon: <Ruler />,
    title: "Project Management",
    description:
      "End-to-end project management ensuring timely delivery, safety, and cost efficiency.",
    image: projectImage,
  },
  {
    icon: <Truck />,
    title: "Heavy Equipment",
    description:
      "State-of-the-art machinery and equipment ensuring fast, safe, and efficient execution.",
    image: heavyEquipmentImage,
  },
];

const Services = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const applyCenterEffect = useCallback((index: number) => {
    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      const isActive = i === index;

      gsap.to(slide, {
        scale: isActive ? 1.1 : 0.85, // Slightly reduced scale to prevent overlap/clipping
        rotateY: isActive ? 0 : -10,
        zIndex: isActive ? 10 : 1,
        duration: 0.6,
        ease: "power3.out",
        transformOrigin: "center center", // Ensures it scales from middle
      });
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}  
          className="text-center max-w-3xl mx-auto mb-4" // Increased margin bottom
        >
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider text-sm">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive construction solutions tailored to meet the unique
            needs of industrial and commercial sectors.
          </p>
        </motion.div>

        <div className="relative pt-10 pb-10">
          {" "}
          {/* Added wrapper with padding to allow for scaling room */}
          <Swiper
            modules={[Autoplay, Navigation]}
            centeredSlides
            loop
            spaceBetween={30}
            speed={900}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation
            breakpoints={{
              0: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              setTimeout(() => applyCenterEffect(swiper.realIndex), 50);
            }}
            onSlideChange={(swiper) => {
              applyCenterEffect(swiper.realIndex);
            }}
            className="!overflow-visible" // CRITICAL: Allows scaled content to bleed outside Swiper box
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div
                  ref={(el) => (slideRefs.current[index] = el)}
                  className="slide-item w-full py-8" // Vertical padding to prevent clipping
                >
                  {/* Image Container */}
                  <div className="overflow-hidden rounded-2xl shadow-lg h-64 w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content Card */}
                  <div className="service-card bg-white p-6 shadow-2xl rounded-2xl -mt-12 mx-auto w-11/12 relative z-20">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#2D266C] mt-2 flex items-center gap-2">
                      <span className="text-[#FFA90D] text-2xl">
                        {service.icon}
                      </span>
                      {service.title}
                    </h3>

                    <p className="text-gray-700 mt-2 text-sm md:text-base line-clamp-2">
                      {service.description}
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="mt-4 text-[#2D266C] hover:text-[#FFA90D] border-[#FFA90D] rounded-full"
                    >
                      Read More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
