import '../globals.css'
import React from "react";
import Link from "next/link";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <nav className="flex p-8 items-center">
                    <Link href="/">
                        <span className=" inline-block font-medium">BLOG</span>
                    </Link>
                </nav>
                <div className="px-8">{children}</div>
            </body>
        </html>
    )
}
