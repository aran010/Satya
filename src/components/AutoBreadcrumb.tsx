"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb } from "./Breadcrumb";

export function AutoBreadcrumb() {
    const pathname = usePathname();

    // Don't show breadcrumbs on home page
    if (pathname === "/") {
        return null;
    }

    const segments = pathname.split("/").filter((segment) => segment !== "");

    const items = segments.map((segment, index) => {
        // Build the href for this segment
        const href = `/${segments.slice(0, index + 1).join("/")}`;

        // Format label: "contact-us" -> "Contact Us"
        const label = segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        // Last item is current
        const isLast = index === segments.length - 1;

        return {
            label,
            href: isLast ? undefined : href,
            current: isLast,
        };
    });

    return (
        <div className="bg-[#fcfaf9] border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <Breadcrumb items={items} />
            </div>
        </div>
    );
}
