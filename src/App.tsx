import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./pages/navbar";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";
import { Experiences } from "./pages/experiences";
import { Tools } from "./pages/tools";
import { Projects } from "./pages/projects";
import { Blogs } from "./pages/blogs";
import { Contact } from "./pages/contact";
import { ThemeProvider } from "./components/theme-provider";

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme-toggle">
            {/* <main className="relative min-h-screen w-full overflow-hidden text-foreground selection:bg-primary selection:text-primary-foreground"> */}
            <div className="relative min-h-screen w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-size-[16px_16px] overflow-hidden text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-300">
                <Navbar />
                <div className="px-6 max-w-360 mx-auto">
                    <Hero />
                    <Projects />
                    <About />
                    <Experiences />
                    <Tools />
                    <Blogs />
                    <Contact />
                </div>
            </div>
            {/* </main> */}
        </ThemeProvider>
    );
}
export default App;
