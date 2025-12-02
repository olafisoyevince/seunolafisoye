import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Senior Frontend Engineer",
        items: [
            "Turing Tower",
            "April 2024 - Present",
            "Building immersive web experiences for various clients using React, WebGL, and GSAP.",
        ],
    },
    {
        title: "Frontend Developer",
        items: [
            "Tech Studio",
            "2021 - 2023",
            "Collaborated with designers to implement pixel-perfect UIs and complex animations.",
        ],
    },
    {
        title: "Junior Developer",
        items: [
            "Creative Agency",
            "2020 - 2021",
            "Assisted in the development of award-winning marketing websites and campaigns.",
        ],
    },
];

export const Services = () => {
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

                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-reveal border-t border-black/10 pt-12 flex flex-col md:flex-row justify-between gap-8 group hover:border-black/30 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <h3 className="text-2xl font-sans font-medium">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="md:w-1/3">
                                    <ul className="space-y-2">
                                        {service.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-muted-foreground font-sans text-sm md:text-base"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
