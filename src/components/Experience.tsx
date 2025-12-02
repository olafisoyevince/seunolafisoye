import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Freelance",
    role: "Senior Frontend Developer",
    period: "2023 - Present",
    description: "Building immersive web experiences for various clients using React, WebGL, and GSAP."
  },
  {
    company: "Tech Studio",
    role: "Frontend Developer",
    period: "2021 - 2023",
    description: "Collaborated with designers to implement pixel-perfect UIs and complex animations."
  },
  {
    company: "Creative Agency",
    role: "Junior Developer",
    period: "2020 - 2021",
    description: "Assisted in the development of award-winning marketing websites and campaigns."
  }
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.experience-item').forEach((item: any) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto" ref={containerRef}>
      <h2 className="text-4xl md:text-7xl font-heading font-bold mb-20">Experience</h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item border-b border-black/10 pb-12 group hover:border-black/30 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <span className="text-lg font-mono text-muted-foreground/60">{exp.period}</span>
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-4xl font-heading font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-xl text-muted-foreground mb-4">{exp.company}</p>
                <p className="text-muted-foreground/80 font-sans leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
