import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TOOLS } from "@/lib/data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const Tools = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".tool-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="tools" className="py-32" ref={containerRef}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Label */}
        <div className="lg:col-span-3">
          <span className="tool-reveal text-sm font-sans text-muted-foreground">
            [03] Tools & Technologies
          </span>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-9">
          <h2 className="tool-reveal text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight mb-24 text-foreground">
            The tools I use to build
            <br className="hidden lg:block" />
            <span className="text-muted-foreground">
              exceptional digital experiences.
            </span>
          </h2>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-6">
            {TOOLS.map((tool, index) => (
              <div
                key={index}
                className="tool-reveal flex flex-col items-center justify-center gap-4 group cursor-pointer"
                title={tool.name}
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 relative flex flex-col gap-1.5 justify-center transition-transform duration-300 group-hover:scale-110 mx-auto">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className={cn(
                        "w-full h-full object-contain mx-auto",
                        tool.icon.includes("000000") ? "dark:invert" : ""
                      )}
                    />
                  </div>
                  <p className="text-center text-xs font-semibold">
                    {tool.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
