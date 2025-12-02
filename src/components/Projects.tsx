import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Vaultpay",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
        year: "2024",
    },
    {
        title: "Greene",
        category: "Graphic Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        year: "2025",
    },
    {
        title: "Gamestats",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop",
        year: "2025",
    },
    {
        title: "Lumina",
        category: "Brand Identity",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        year: "2022",
    },
    {
        title: "Brutal",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        year: "2023",
    },
    {
        title: "Flow",
        category: "Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        year: "2023",
    },
];

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".project-reveal", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
            });
        },
        { scope: containerRef }
    );

    return (
        <section
            id="work"
            className="py-32 px-6 max-w-360 mx-auto"
            ref={containerRef}
        >
            <div className="flex justify-between items-baseline mb-16">
                <h2 className="project-reveal text-4xl md:text-6xl font-heading font-medium tracking-tight">
                    Selected projects
                </h2>
                <span className="project-reveal text-lg md:text-xl text-muted-foreground font-sans">
                    '23 - Present
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-reveal group cursor-pointer"
                    >
                        <div className="overflow-hidden rounded-2xl mb-6 relative aspect-4/3">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-sans font-medium group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <div className="text-right">
                                <span className="block text-sm font-sans mb-1 text-black">
                                    {project.year}
                                </span>
                                <span className="block text-sm text-muted-foreground font-sans">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
