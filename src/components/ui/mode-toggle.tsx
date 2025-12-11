import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "../theme-provider";
import { Button } from "./button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "./menubar";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <Menubar className="border-none bg-transparent shadow-none">
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className="cursor-pointer focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
                    >
                        <Sun className="size-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute size-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </MenubarTrigger>
                <MenubarContent align="end">
                    <MenubarItem onClick={() => setTheme("light")}>
                        <Sun className="h-4 w-4" />
                        Light
                    </MenubarItem>
                    <MenubarItem onClick={() => setTheme("dark")}>
                        <Moon className="h-4 w-4" />
                        Dark
                    </MenubarItem>
                    <MenubarItem onClick={() => setTheme("system")}>
                        <Laptop className="h-4 w-4" />
                        System
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
