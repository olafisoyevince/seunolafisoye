import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2,
            })
                .from(
                    textRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.8"
                )
                .from(
                    buttonRef.current,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.6"
                );
        },
        { scope: containerRef }
    );

    return (
        <section
            id="home"
            ref={containerRef}
            className="min-h-screen flex flex-col justify-center relative z-10 pt-32 px-6 max-w-360 mx-auto"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mx-auto w-full">
                {/* Left Side - Headline */}
                <div className="lg:col-span-8">
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-7xl lg:text-[5rem] font-heading font-semibold tracking-tight leading-[1.1] text-foreground mb-10"
                    >
                        Hey! I{" "}
                        <span className="inline-flex -mb-2 md:-mb-4 mx-2">
                            <img
                                src={"/me.jpg"}
                                alt="Me"
                                className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover border-2 border-foreground/10 rotate-3"
                            />
                        </span>{" "}
                        build meaningful experiences that connect people and
                        ideas worldwide.
                    </h1>

                    <a
                        ref={buttonRef}
                        href="#contact"
                        className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        Get in touch <ArrowRight size={20} />
                    </a>
                </div>

                {/* Right Side - Description */}
                <div className="lg:col-span-4 lg:pt-4 flex lg:justify-end">
                    <p
                        ref={textRef}
                        className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-md"
                    >
                        I'm Oluwaseun Olafisoye, a Frontend Engineer passionate
                        about crafting accessible, pixel-perfect user interfaces
                        that blend design and technology seamlessly.
                    </p>
                </div>
            </div>
        </section>
    );
};
