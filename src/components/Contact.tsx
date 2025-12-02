import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Linkedin } from "lucide-react";

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
            <div className="bg-black text-white rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    {/* Avatars */}
                    <div className="flex -space-x-3 mb-10 contact-reveal">
                        {["/me.jpg"].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="Team member"
                                className="w-14 h-14 rounded-2xl border-2 border-black object-cover"
                            />
                        ))}
                    </div>

                    <h2 className="contact-reveal text-4xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.1] mb-12 tracking-tight">
                        Let's discuss how
                        <br />
                        we can make your
                        <br />
                        product better!
                    </h2>

                    <a
                        href="mailto:olafisoyevincent@gmail.com"
                        className="contact-reveal inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-sans font-medium hover:bg-gray-200 transition-colors"
                    >
                        Get in touch <ArrowRight size={20} />
                    </a>
                </div>

                {/* Footer Bottom */}
                <div className="contact-reveal mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 font-sans">
                    <div className="flex items-center gap-2">
                        <a
                            href="https://x.com/fisoyeseun_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col items-center justify-center gap-4 group cursor-pointer hover:opacity-80">
                                <div className="w-3 h-3 relative flex items-center justify-center">
                                    <img
                                        src={
                                            "https://cdn.simpleicons.org/x/FFFFFF"
                                        }
                                        alt={"x"}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </a>{" "}
                        <a
                            href="https://linkedin.com/in/oluwaseun-olafisoye"
                            className="text-white hover:opacity-80"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size={16} fill="currentColor" />
                        </a>
                    </div>

                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
                        &copy; 2025 Oluwaseun Olafisoye
                    </div>

                    <div>{date}</div>
                </div>
            </div>
        </section>
    );
};
