import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CVButton } from "./CVButton";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        title: "Senior Frontend Engineer",
        company: "Turing Tower",
        period: "April 2024 - Present",
        description:
            "Directed development of enterprise and healthcare web applications, improving operational efficiency and contributing to revenue growth.",
    },
    {
        title: "Software Engineer",
        company: "Freelance",
        period: "September 2023 - Present",
        description:
            "Built landing pages and web apps for small businesses, wrote technical articles, and taught frontend engineering to 20+ students.",
    },
    {
        title: "Information Security, Service Desk Officer",
        company: "Septagus Consulting / Sterling Bank Plc",
        period: "June 2023 - September 2023",
        description:
            "Supported cybersecurity research, incident response, and IT operations while contributing to security compliance.",
    },

    {
        title: "Frontend Developer",
        company: "Zero & One Technologies Ltd",
        period: "May 2022 - June 2023",
        description:
            "Developed a large-scale election results visualization app, created reusable UI components, and mentored interns.",
    },
];

export const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".service-reveal", {
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
            id="services"
            className="py-32 px-6 max-w-360 mx-auto"
            ref={containerRef}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Label */}
                <div className="lg:col-span-3">
                    <span className="service-reveal text-sm text-muted-foreground">
                        [02] Experience
                    </span>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9">
                    <h2 className="service-reveal text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-24 text-black">
                        My journey has been defined by a passion for creating
                        exceptional{" "}
                        <span className="text-muted-foreground">
                            digital experiences{" "}
                        </span>
                        <span className="text-muted-foreground">
                            and scalable solutions.
                        </span>
                    </h2>

                    <div className="service-reveal mb-16">
                        <CVButton
                            className="bg-black text-white px-6 py-3 rounded-full hover:bg-black/80"
                            text="View Full Resume"
                        />
                    </div>

                    <div className="space-y-16">
                        {experiences.map((experience, index) => (
                            <div
                                key={index}
                                className="service-reveal border-t border-black/10 pt-12 flex flex-col md:flex-row justify-between gap-4 md:gap-8 group hover:border-black/30 transition-colors"
                            >
                                <div className="flex items-center gap-4 md:w-1/2">
                                    <h3 className="text-2xl font-sans font-medium">
                                        {experience.title}
                                    </h3>
                                </div>

                                <div className="md:w-1/2 flex flex-col gap-2">
                                    <div className="text-lg font-semibold text-black">
                                        {experience.company}
                                    </div>
                                    <div className="text-sm text-muted-foreground font-sans">
                                        {experience.period}
                                    </div>
                                    <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">
                                        {experience.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
