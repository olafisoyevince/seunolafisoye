import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { BLOGS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export const Blogs = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".blog-reveal", {
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
        <section id="blogs" className="py-32" ref={containerRef}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Label */}
                <div className="lg:col-span-3">
                    <span className="blog-reveal text-sm font-sans text-muted-foreground">
                        [04] Thoughts & Insights
                    </span>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9">
                    <h2 className="blog-reveal text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-24 text-foreground">
                        Exploring the intersection of
                        <br className="hidden lg:block" />
                        design, technology,{" "}
                        <span className="text-muted-foreground">and the</span>
                        <br className="hidden lg:block" />
                        <span className="text-muted-foreground">
                            future of digital experiences.
                        </span>
                    </h2>

                    <div className="space-y-8">
                        {BLOGS.map((blog, index) => (
                            <a
                                key={index}
                                href={blog.link}
                                className="blog-reveal block group border-t border-border pt-8 hover:border-foreground/30 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl md:text-3xl font-heading font-medium mb-2 group-hover:text-primary transition-colors">
                                            {blog.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm font-sans text-muted-foreground">
                                            <span>{blog.date}</span>
                                            <span>•</span>
                                            <span>{blog.category}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
