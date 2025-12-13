import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            width="70"
            height="24"
            viewBox="0 0 70 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-6 w-auto", className)}
        >
            <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-heading font-bold tracking-tighter fill-current"
                fontSize="24"
            >
                SEUN.
            </text>
        </svg>
    );
};
