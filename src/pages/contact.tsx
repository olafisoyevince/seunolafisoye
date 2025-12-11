import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, FileText, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CVButton } from "./cv-button";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [date, setDate] = useState("");

    useEffect(() => {
        const now = new Date();
        setDate(
            now.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "numeric",
                day: "numeric",
            })
        );
    }, []);

    useGSAP(
        () => {
            gsap.from(".contact-reveal", {
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
            id="contact"
            className="py-12 px-6 max-w-360 mx-auto"
            ref={containerRef}
        >
            {/* Content */}
            <div className="relative z-10 max-w-4xl">
                {/* Avatars */}
                <div className="flex -space-x-3 mb-10 contact-reveal">
                    {["/me.jpg"].map((src, i) => (
                        <Avatar
                            key={i}
                            className="w-14 h-14 border-2 border-primary"
                        >
                            <AvatarImage
                                src={src}
                                alt="Team member"
                                className="object-cover"
                            />
                            <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                    ))}
                </div>

                <h2 className="contact-reveal text-4xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.1] mb-12 tracking-tight">
                    Let's discuss how
                    <br />
                    we can make your
                    <br />
                    product better!
                </h2>

                <div className="flex flex-wrap gap-4">
                    <Button
                        asChild
                        className="contact-reveal group h-auto rounded-full bg-primary-foreground w-44 py-4 text-base font-medium text-primary hover:bg-primary-foreground/90"
                    >
                        <a
                            href="/Oluwaseun Olafisoye - Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                            <FileText
                                size={20}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                        </a>
                    </Button>

                    <Button
                        asChild
                        className="contact-reveal group h-auto rounded-full bg-primary-foreground w-44 py-4 text-base font-medium text-primary hover:bg-primary-foreground/90"
                    >
                        <a href="mailto:olafisoyevincent@gmail.com">
                            Get in touch
                            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </Button>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="contact-reveal mt-32 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-sans">
                <div className="flex items-center gap-4">
                    <a
                        href="https://x.com/fisoyeseun_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:opacity-80"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 fill-current"
                        >
                            <title>X</title>
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com/in/oluwaseun-olafisoye"
                        className="text-primary hover:opacity-80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={16} fill="currentColor" />
                    </a>
                </div>

                <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
                    &copy; 2025 Oluwaseun Olafisoye
                </div>

                <div className="flex items-center gap-4">
                    <CVButton
                        className="text-primary hover:text-primary/80"
                        showIcon={false}
                    />
                    <div>{date}</div>
                </div>
            </div>
        </section>
    );
};
