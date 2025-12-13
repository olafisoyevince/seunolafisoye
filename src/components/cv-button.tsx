import { FileText } from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router";

interface CVButtonProps {
    className?: string;
    showIcon?: boolean;
    text?: string;
}

export const CVButton = ({
    className,
    showIcon = true,
    text = "Resume",
}: CVButtonProps) => {
    return (
        <Link
            to="/Oluwaseun Olafisoye - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group inline-flex items-center gap-2 cursor-pointer transition-all duration-300 ease-out hover:scale-105 font-semibold",
                className
            )}
        >
            {text}
            {showIcon && (
                <FileText
                    size={20}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:rotate-12"
                />
            )}
        </Link>
    );
};
