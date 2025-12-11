import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tools = [
    {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Tanstack", icon: "https://cdn.simpleicons.org/tanstack/000000" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    { name: "Shadcn/ui", icon: "https://cdn.simpleicons.org/shadcnui/000000" },
    { name: "Framer", icon: "https://cdn.simpleicons.org/framer/0055FF" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/000000" },
    {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
    { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/000000" },
    { name: "OpenAI", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
];

export const Tools = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".tool-reveal", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power3.out",
            });
        },
        { scope: containerRef }
    );

    return (
        <section
            id="tools"
            className="py-32 px-6 max-w-360 mx-auto"
            ref={containerRef}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Label */}
                <div className="lg:col-span-3">
                    <span className="tool-reveal text-sm font-sans text-muted-foreground">
                        [03] Tools & Technologies
                    </span>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9">
                    <h2 className="tool-reveal text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-24 text-foreground">
                        The tools I use to build
                        <br className="hidden lg:block" />
                        <span className="text-muted-foreground">
                            exceptional digital experiences.
                        </span>
                    </h2>

                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-4">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="tool-reveal flex flex-col items-center justify-center gap-4 group cursor-pointer"
                                title={tool.name}
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        className={`w-full h-full object-contain ${
                                            tool.icon.includes("000000")
                                                ? "dark:invert"
                                                : ""
                                        }`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
