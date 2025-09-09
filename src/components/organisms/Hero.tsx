
import React from "react";
import Button from "../atoms/Button";

type HeroProps = {
    title: string;
    subtitle?: string;
    ctaText?: string;
    onCtaClick?: () => void;
};

export default function Hero({ title, subtitle, ctaText = "Get Started", onCtaClick }: HeroProps) {
    return (
        <section className="mx-auto max-w-3xl py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            {subtitle ? <p className="mt-4 text-gray-600">{subtitle}</p> : null}
            <div className="mt-8 flex items-center justify-center gap-3">
                <Button onClick={onCtaClick}> {ctaText} </Button>
                <Button variant="secondary">Learn More</Button>
            </div>
        </section>
    );
}

