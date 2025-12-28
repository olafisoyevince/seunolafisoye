import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CVButton } from "@/components/cv-button";
import { Link } from "react-router";
import { Linkedin } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        }
      )
        .fromTo(
          textRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .fromTo(
          buttonRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative z-10 pt-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mx-auto w-full">
        {/* Left Side - Headline */}
        <div className="lg:col-span-8">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-[5rem] font-heading font-semibold tracking-tight leading-[1.1] text-foreground mb-10"
          >
            hey! I{" "}
            <span className="inline-flex -mb-2 md:-mb-4 mx-2">
              <Avatar className="w-20 h-20 border-2 border-primary rounded-3xl rotate-5">
                <AvatarImage
                  src="/me.jpg"
                  alt="Team member"
                  className="object-cover"
                />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            </span>{" "}
            build polished, user-focused digital experiences that help
            businesses bring ideas to life.
          </h1>

          <div ref={buttonRef} className="mt-8 flex items-center gap-6">
            <Link to={"https://github.com/olafisoyevincent"}>
              <img
                src="https://cdn.simpleicons.org/github/181717"
                className="object-contain w-10 h-10 fill-current dark:invert hover:opacity-80"
                alt="GitHub"
              />
            </Link>

            <Link
              to="https://linkedin.com/in/oluwaseun-olafisoye"
              className="text-primary hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={40} fill="currentColor" />
            </Link>

            <CVButton
              className="bg-primary text-primary-foreground px-6 py-4 rounded-full hover:bg-primary/90"
              text="View my CV"
            />
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="lg:col-span-4 lg:pt-4 flex flex-col gap-3.5 lg:justify-end">
          <p
            ref={textRef}
            className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-md"
          >
            I'm Oluwaseun Olafisoye, a{" "}
            <span className="font-semibold text-black dark:text-white">
              software engineer (frontend heavy)
            </span>{" "}
            with{" "}
            <span className="font-semibold text-black dark:text-white">
              5 years of experience
            </span>{" "}
            building web applications. I craft accessible, pixel-perfect user
            interfaces that blend design and technology seamlessly.
          </p>

          <p
            ref={textRef}
            className="text-black font-sans leading-relaxed max-w-md font-semibold text-lg dark:text-white"
          >
            Based in United Kingdom
          </p>
        </div>
      </div>
    </section>
  );
};
