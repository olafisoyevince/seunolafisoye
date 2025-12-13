import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, FileText, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CVButton } from "../components/cv-button";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [date, setDate] = useState("");

    useEffect(() => {
        const now = new Date();
        setDate(
            now.toLocaleDateString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "numeric",
                day: "numeric",
            })
        );
    }, []);

    useGSAP(
        () => {
            gsap.fromTo(
                ".contact-reveal",
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <section id="contact" className="py-12" ref={containerRef}>
            {/* Content */}
            <div className="relative z-10 max-w-4xl">
                {/* Avatars */}
                <div className="flex -space-x-3 mb-10 contact-reveal">
                    {["/me.jpg"].map((src, i) => (
                        <Avatar
                            key={i}
                            className="w-20 h-20 border-2 border-primary rounded-3xl rotate-5"
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
                        className="contact-reveal group h-auto rounded-full bg-primary w-44 py-4 text-base font-medium text-primary-foreground hover:bg-primary/90"
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
                        className="contact-reveal group h-auto rounded-full bg-primary w-44 py-4 text-base font-medium text-primary-foreground hover:bg-primary/90"
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
                    <Link
                        to="https://x.com/fisoyeseun_"
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
                    </Link>
                    <Link
                        to="https://linkedin.com/in/oluwaseun-olafisoye"
                        className="text-primary hover:opacity-80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={16} fill="currentColor" />
                    </Link>
                    <Link to={"https://github.com/olafisoyevincent"}>
                        <img
                            src="https://cdn.simpleicons.org/github/181717"
                            className="object-contain w-4 h-4 fill-current dark:invert hover:opacity-80"
                            alt="GitHub"
                        />
                    </Link>
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
