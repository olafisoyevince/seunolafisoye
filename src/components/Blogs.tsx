import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
    {
        title: "The Future of Web Design: Trends to Watch in 2025",
        date: "Oct 12, 2024",
        category: "Design",
        link: "#",
    },
    {
        title: "Mastering React Server Components",
        date: "Sep 28, 2024",
        category: "Development",
        link: "#",
    },
    {
        title: "Building Accessible User Interfaces",
        date: "Aug 15, 2024",
        category: "Accessibility",
        link: "#",
    },
    {
        title: "Why Micro-interactions Matter",
        date: "Jul 03, 2024",
        category: "UX Design",
        link: "#",
    },
];

export const Blogs = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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
    }, { scope: containerRef });

    return (
        <section
            id="blogs"
            className="py-32 px-6 max-w-360 mx-auto"
            ref={containerRef}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Label */}
                <div className="lg:col-span-3">
                    <span className="blog-reveal text-sm font-sans text-muted-foreground">
                        [04] Thoughts & Insights
                    </span>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-9">
                    <h2 className="blog-reveal text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-24 text-black">
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
                        {blogs.map((blog, index) => (
                            <a
                                key={index}
                                href={blog.link}
                                className="blog-reveal block group border-t border-black/10 pt-8 hover:border-black/30 transition-colors"
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
                                        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
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
