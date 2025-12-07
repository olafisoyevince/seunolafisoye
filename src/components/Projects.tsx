import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Vaultpay",
        client: "Vault Inc",
        clientLogo: "https://cdn.simpleicons.org/baremetrics/6078FF",
        category: "Product Design",
        projectImage:
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
        year: "2024",
        description:
            "A secure and intuitive digital wallet for managing your finances with ease.",
        className: "md:col-span-2",
    },
    {
        title: "Greene",
        client: "EcoLife",
        clientLogo: "https://cdn.simpleicons.org/beatsbydre/E01F3D",
        category: "Graphic Design",
        projectImage:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        year: "2025",
        description:
            "Sustainable brand identity design for an eco-friendly lifestyle startup.",
        className: "md:row-span-2",
    },
    {
        title: "Gamestats",
        client: "ProGaming",
        clientLogo: "https://cdn.simpleicons.org/coronarenderer/E6502A",
        category: "Product Design",
        projectImage:
            "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop",
        year: "2025",
        description:
            "Real-time analytics dashboard for professional gamers and esports teams.",
        className: "md:col-span-1",
    },
    {
        title: "Lumina",
        client: "LightHouse",
        clientLogo: "https://cdn.simpleicons.org/decapcms/FF0082",
        category: "Brand Identity",
        projectImage:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        year: "2022",
        description:
            "Modern lighting solutions brand focused on minimalist aesthetics.",
        className: "md:col-span-1",
    },
    {
        title: "Brutal",
        client: "Artistry",
        clientLogo: "https://cdn.simpleicons.org/ericsson/0082F0",
        category: "Web Design",
        projectImage:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        year: "2023",
        description:
            "Experimental brutalist web design portfolio for a creative agency.",
        className: "md:col-span-2",
    },
    {
        title: "Flow",
        client: "Focus",
        clientLogo: "https://cdn.simpleicons.org/fathom/9187FF",
        category: "Development",
        projectImage:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        year: "2023",
        description:
            "Productivity application designed to help you stay in the flow state.",
        className: "md:col-span-1",
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={cn(
                            "project-reveal group cursor-pointer bg-primary p-2 rounded-[28px] text-primary-foreground flex flex-col",
                            project.className
                        )}
                    >
                        <div className="overflow-hidden rounded-[20px] mb-2 relative flex-1">
                            <img
                                src={project.projectImage}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        <div className="px-2 mb-2">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-sans font-medium group-hover:text-muted-foreground transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-muted-foreground font-sans uppercase">
                                            For
                                        </span>
                                        <Avatar className="size-10 border border-primary-foreground/10">
                                            <AvatarImage
                                                src={project.clientLogo}
                                                alt={project.client}
                                            />
                                            <AvatarFallback className="text-[10px] text-primary font-sans">
                                                {project.client
                                                    .substring(0, 2)
                                                    .toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-sm font-sans mb-1 text-primary-foreground">
                                        {project.year}
                                    </span>
                                    <span className="block text-sm text-muted-foreground font-sans">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
