import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experiences } from "./components/Experiences";
import { Tools } from "./components/Tools";
import { Projects } from "./components/Projects";
import { Blogs } from "./components/Blogs";
import { Contact } from "./components/Contact";

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
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <main className="relative min-h-screen w-full overflow-hidden text-foreground selection:bg-primary selection:text-primary-foreground">
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Experiences />
                <Tools />
                <Blogs />
                <Contact />
            </main>
        </ThemeProvider>
    );
}
export default App;
