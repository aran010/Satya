"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
    current?: boolean;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
                {/* Home */}
                <li>
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Home"
                    >
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>
                </li>

                {/* Breadcrumb items */}
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
                        {item.current ? (
                            <span
                                className="font-semibold text-gray-900"
                                aria-current="page"
                            >
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href || '#'}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
