
import React from "react";

type CardProps = {
    title: string;
    body: string;
    footer?: React.ReactNode;
};

export default function Card({ title, body, footer }: CardProps) {
    return (
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{body}</p>
            {footer ? <div className="mt-4">{footer}</div> : null}
        </div>
    );
}

