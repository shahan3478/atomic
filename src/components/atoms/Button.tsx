
import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ className, variant = "primary", ...props }: ButtonProps) {
    const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition";
    const styles = {
        primary: "bg-black text-white hover:opacity-90",
        secondary: "bg-white text-black border border-gray-300 hover:bg-gray-50",
        ghost: "bg-transparent text-black hover:bg-gray-100"
    }[variant];

    return <button className={clsx(base, styles, className)} {...props} />;
}

