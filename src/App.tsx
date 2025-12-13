import { useEffect } from "react";
import Lenis from "lenis";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";
import { Experiences } from "./pages/experiences";
import { Tools } from "./pages/tools";
import { Blogs } from "./pages/blogs";
import { Contact } from "./pages/contact";
import { ThemeProvider } from "./components/theme-provider";
import { ProjectDetails } from "./pages/projects/project-details";
import { Routes, Route } from "react-router";
import { Layout } from "./components/layout";
import { Projects } from "./pages/projects";

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
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <div className="px-6 max-w-360 mx-auto">
                                <Hero />
                                <Projects />
                                <About />
                                <Experiences />
                                <Tools />
                                <Blogs />
                                <Contact />
                            </div>
                        }
                    />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}
export default App;
