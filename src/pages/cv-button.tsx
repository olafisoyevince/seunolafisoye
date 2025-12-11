import { FileText } from "lucide-react";
import { cn } from "../lib/utils";

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
        <a
            href="/Oluwaseun Olafisoye - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "inline-flex items-center gap-2 cursor-pointer transition-colors",
                className
            )}
        >
            {text}
            {showIcon && <FileText size={14} />}
        </a>
    );
};
