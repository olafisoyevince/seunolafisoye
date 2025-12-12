import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "./ui/menubar";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const sunRef = useRef<HTMLDivElement>(null);
    const moonRef = useRef<HTMLDivElement>(null);
    const mounted = useRef(false);

    useGSAP(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        // Set initial state without animation
        if (isDark) {
            gsap.set(sunRef.current, { rotation: -90, scale: 0 });
            gsap.set(moonRef.current, { rotation: 0, scale: 1 });
        } else {
            gsap.set(sunRef.current, { rotation: 0, scale: 1 });
            gsap.set(moonRef.current, { rotation: 90, scale: 0 });
        }
    }, []); // Run once on mount

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }

        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        const tl = gsap.timeline();

        if (isDark) {
            tl.to(sunRef.current, {
                rotation: -90,
                scale: 0,
                duration: 0.5,
                ease: "back.in(1.7)",
            }).to(
                moonRef.current,
                {
                    rotation: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                },
                "<"
            );
        } else {
            tl.to(moonRef.current, {
                rotation: 90,
                scale: 0,
                duration: 0.5,
                ease: "back.in(1.7)",
            }).to(
                sunRef.current,
                {
                    rotation: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                },
                "<"
            );
        }
    }, [theme]);

    return (
        <Menubar className="border-none bg-transparent shadow-none">
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className="cursor-pointer focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative"
                    >
                        <div
                            ref={sunRef}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Sun className="size-3.5" />
                        </div>
                        <div
                            ref={moonRef}
                            className="absolute inset-0 flex items-center justify-center scale-0"
                        >
                            <Moon className="size-3.5" />
                        </div>
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </MenubarTrigger>
                <MenubarContent align="end">
                    <MenubarItem onClick={(e) => setTheme("light", e)}>
                        <Sun className="h-4 w-4" />
                        Light
                    </MenubarItem>
                    <MenubarItem onClick={(e) => setTheme("dark", e)}>
                        <Moon className="h-4 w-4" />
                        Dark
                    </MenubarItem>
                    <MenubarItem onClick={(e) => setTheme("system", e)}>
                        <Laptop className="h-4 w-4" />
                        System
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
