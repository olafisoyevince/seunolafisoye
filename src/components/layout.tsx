import { Outlet } from "react-router";
import { Navbar } from "../pages/navbar";

export const Layout = () => {
    return (
        <div className="relative min-h-screen w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-size-[16px_16px] overflow-hidden text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-300">
            <Navbar />
            <Outlet />
        </div>
    );
};
