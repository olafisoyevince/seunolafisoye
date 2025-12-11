import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".about-reveal", {
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
            id="about"
            className="py-32 px-6 max-w-360 mx-auto"
            ref={containerRef}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Label */}
                <div className="lg:col-span-3">
                    <span className="about-reveal text-sm font-sans text-muted-foreground">
                        [01] Who I am
                    </span>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9">
                    <h2 className="about-reveal text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-16">
                        <span className="text-muted-foreground">
                            I'm a frontend engineer passionate about creating
                            user-focused digital solutions.
                        </span>{" "}
                        <span className="text-foreground">
                            Whether it's a bold website or a detailed app
                            interface, I'm here to make your ideas shine.
                        </span>
                    </h2>

                    <div className="about-reveal bg-secondary text-secondary-foreground p-8 md:p-12 rounded-4xl max-w-2xl shadow-2xl">
                        <p className="text-lg md:text-xl font-sans leading-relaxed text-secondary-foreground/90 mb-12">
                            "Engineering is about solving problems with
                            creativity. I craft user-focused digital
                            experiences. Building meaningful products is a
                            privilege — and I'm passionate about bringing
                            meaningful user experiences to life."
                        </p>

                        <div className="flex items-center gap-4">
                            <Avatar className="w-14 h-14 border-2 border-primary">
                                <AvatarImage
                                    src="/me.jpg"
                                    alt="Team member"
                                    className="object-cover"
                                />
                                <AvatarFallback>ME</AvatarFallback>
                            </Avatar>

                            <div>
                                <div className="flex flex-col items-start sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                                    <span className="font-heading font-bold text-lg text-secondary-foreground">
                                        Oluwaseun
                                    </span>
                                    <span className="bg-secondary-foreground/20 text-xs px-2 py-0.5 rounded text-secondary-foreground/80 w-fit whitespace-nowrap">
                                        Frontend Engineer
                                    </span>
                                </div>
                                <div className="text-sm text-secondary-foreground/60 font-sans">
                                    Based in United Kingdom
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
