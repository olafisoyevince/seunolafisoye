import { useState, useEffect } from "react";
import { Menu, X, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: href, offsetY: 50 },
            ease: "power4.inOut",
        });
    };

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: false,
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.to(".mobile-menu", {
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        } else {
            gsap.to(".mobile-menu", {
                x: "100%",
                duration: 0.5,
                ease: "power3.in",
            });
        }
    }, [isOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50">
                <div className="absolute inset-0 backdrop-blur-md" />
                <nav className="relative px-6 py-6 flex justify-between items-center text-white mix-blend-difference border-b border-white/10">
                    {/* Left Side */}
                <div className="flex items-center gap-4 md:gap-8">
                    <div
                        onClick={(e) => handleScroll(e, "#home")}
                        className="text-2xl font-heading font-bold tracking-tighter cursor-pointer"
                    >
                        SEUN.
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <div className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-sans text-white/80 border border-white/10">
                            <span className="text-white font-medium">
                                Open to work
                            </span>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-sans text-white/80 border border-white/10 flex items-center gap-2">
                            {time} <Clock size={12} />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8 text-sm font-sans font-medium tracking-wide">
                        <a
                            href="#about"
                            onClick={(e) => handleScroll(e, "#about")}
                            className="hover:text-white/70 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#work"
                            onClick={(e) => handleScroll(e, "#work")}
                            className="hover:text-white/70 transition-colors"
                        >
                            Work
                        </a>
                        <a
                            href="#services"
                            onClick={(e) => handleScroll(e, "#services")}
                            className="hover:text-white/70 transition-colors"
                        >
                            Services
                        </a>
                    </div>
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, "#contact")}
                        className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                        Contact
                    </a>
                </div>

                <button onClick={toggleMenu} className="md:hidden z-50">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>
            </header>

            <div className="mobile-menu fixed top-0 right-0 w-full h-screen bg-white text-black flex flex-col justify-center items-center gap-8 transform translate-x-full md:hidden z-40">
                <a
                    href="#work"
                    onClick={(e) => handleScroll(e, "#work")}
                    className="text-4xl font-heading hover:text-gray-600"
                >
                    Work
                </a>
                <a
                    href="#about"
                    onClick={(e) => handleScroll(e, "#about")}
                    className="text-4xl font-heading hover:text-gray-600"
                >
                    About
                </a>
                <a
                    href="#services"
                    onClick={(e) => handleScroll(e, "#services")}
                    className="text-4xl font-heading hover:text-gray-600"
                >
                    Services
                </a>
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "#contact")}
                    className="text-4xl font-heading hover:text-gray-600"
                >
                    Contact
                </a>

                <div className="flex flex-col items-center gap-4 mt-8">
                    <div className="bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-sans text-black/80 border border-black/10">
                        <span className="text-black font-medium">
                            Open to work
                        </span>{" "}
                        <span className="opacity-50 mx-1">/</span> Booking for
                        February
                    </div>
                    <div className="bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-sans text-black/80 border border-black/10 flex items-center gap-2">
                        {time} <Clock size={12} />
                    </div>
                </div>
            </div>
        </>
    );
};
