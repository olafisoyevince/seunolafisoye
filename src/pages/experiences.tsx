import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CVButton } from "../components/cv-button";
import { EXPERIENCES } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

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
        <section id="services" className="py-32" ref={containerRef}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Label */}
                <div className="lg:col-span-3">
                    <span className="service-reveal text-sm text-muted-foreground">
                        [02] Experience
                    </span>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9">
                    <h2 className="service-reveal text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-24 text-foreground">
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
                            className="bg-primary text-primary-foreground px-6 py-4 rounded-full hover:bg-primary/90"
                            text="View my CV"
                        />
                    </div>

                    <div className="space-y-16">
                        {EXPERIENCES.map((experience, index) => (
                            <div
                                key={index}
                                className="service-reveal border-t border-border pt-12 flex flex-col md:flex-row justify-between gap-4 md:gap-8 group hover:border-foreground/30 transition-colors"
                            >
                                <div className="flex items-center gap-4 md:w-1/2">
                                    <h3 className="text-2xl font-sans font-medium">
                                        {experience.title}
                                    </h3>
                                </div>

                                <div className="md:w-1/2 flex flex-col gap-2">
                                    <div className="text-lg font-semibold text-foreground">
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
