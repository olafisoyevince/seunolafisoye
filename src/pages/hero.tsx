import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.fromTo(
                titleRef.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.2,
                }
            )
                .fromTo(
                    textRef.current,
                    {
                        y: 30,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.8"
                )
                .fromTo(
                    buttonRef.current,
                    {
                        y: 20,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
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
            className="min-h-screen flex flex-col justify-center relative z-10 pt-32"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mx-auto w-full">
                {/* Left Side - Headline */}
                <div className="lg:col-span-8">
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-7xl lg:text-[5rem] font-heading font-semibold tracking-tight leading-[1.1] text-foreground mb-10"
                    >
                        hey! I{" "}
                        <span className="inline-flex -mb-2 md:-mb-4 mx-2">
                            <Avatar className="w-20 h-20 border-2 border-primary rounded-3xl rotate-5">
                                <AvatarImage
                                    src="/me.jpg"
                                    alt="Team member"
                                    className="object-cover"
                                />
                                <AvatarFallback>ME</AvatarFallback>
                            </Avatar>
                        </span>{" "}
                        build polished, user-focused digital experiences that
                        help businesses bring ideas to life.
                    </h1>

                    <Link
                        ref={buttonRef}
                        to="#contact"
                        className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        Get in touch <ArrowRight size={20} />
                    </Link>
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
