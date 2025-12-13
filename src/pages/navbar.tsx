import { useState, useEffect } from "react";
import { Menu, X, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ThemeToggle } from "../components/theme-toggle";
import { Logo } from "../components/logo";
import { useLocation, useNavigate } from "react-router";

gsap.registerPlugin(ScrollToPlugin);

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [targetSection, setTargetSection] = useState<string | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (href: string) => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: href, offsetY: 50 },
            ease: "power4.inOut",
        });
    };

    const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        if (location.pathname !== "/") {
            setTargetSection(href);
            navigate("/");
        } else {
            scrollToSection(href);
        }
    };

    useEffect(() => {
        if (location.pathname === "/" && targetSection) {
            const timer = setTimeout(() => {
                scrollToSection(targetSection);
                setTargetSection(null);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [location.pathname, targetSection]);

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
            <nav className="fixed top-0 left-0 w-full z-50 py-6 text-white mix-blend-difference">
                <div className="px-6 max-w-360 mx-auto flex justify-between items-center">
                    {/* Left Side */}
                    <div className="flex items-center gap-4 lg:gap-8">
                        <div
                            onClick={(e) => handleScroll(e, "#home")}
                            className="cursor-pointer"
                        >
                            <Logo />
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            <div className="px-4 py-2 rounded-full text-xs font-sans border border-white/10">
                                <span className="text-white font-medium">
                                    Open to work
                                </span>
                            </div>

                            <div className="px-4 py-2 rounded-full text-xs font-sans  border border-white/10 flex items-center gap-2">
                                {time} <Clock size={12} />
                            </div>

                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex gap-8 text-sm font-sans font-medium tracking-wide items-center">
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

                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "#contact")}
                                className="hover:text-white/70 transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    <button onClick={toggleMenu} className="lg:hidden z-50">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <div className="mobile-menu fixed top-0 right-0 w-full h-dvh bg-background text-foreground flex flex-col justify-center items-center gap-8 transform translate-x-full lg:hidden z-40 overflow-y-auto">
                <a
                    href="#work"
                    onClick={(e) => handleScroll(e, "#work")}
                    className="text-4xl font-heading hover:text-muted-foreground transition-colors"
                >
                    Work
                </a>
                <a
                    href="#about"
                    onClick={(e) => handleScroll(e, "#about")}
                    className="text-4xl font-heading hover:text-muted-foreground transition-colors"
                >
                    About
                </a>
                <a
                    href="#services"
                    onClick={(e) => handleScroll(e, "#services")}
                    className="text-4xl font-heading hover:text-muted-foreground transition-colors"
                >
                    Services
                </a>
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "#contact")}
                    className="text-4xl font-heading hover:text-muted-foreground transition-colors"
                >
                    Contact
                </a>

                <div className="flex flex-col items-center gap-4 mt-8">
                    <div className=" px-4 py-2 rounded-full text-xs font-sans border border-foreground/10">
                        <span className="text-foreground font-medium">
                            Open to work
                        </span>
                    </div>
                    <div className=" px-4 py-2 rounded-full text-xs font-sans border border-foreground/10 flex items-center gap-2">
                        {time} <Clock size={12} />
                    </div>
                    <div className="text-foreground">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </>
    );
};
