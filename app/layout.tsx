import './globals.css'
import Navigation from "./_components/Navigation";

import { Poppins } from 'next/font/google';
import { Metadata } from "next";

const poppinsMedium = Poppins({
    weight: '500',
    subsets: ['latin'],
    variable: '--font-poppins-medium'
});

const poppinsSemibold = Poppins({
    weight: '600',
    subsets: ['latin'],
    variable: '--font-poppins-semibold'
});

const poppinsBold = Poppins({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-poppins-bold'
});

const poppinsExtraBold = Poppins({
    weight: '800',
    subsets: ['latin'],
    variable: '--font-poppins-extrabold'
});

export const metadata: Metadata = {
    title: 'Shawn TSENG Blog',
    description: 'Shawn TSENG Blog',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='scroll-smooth'>
            <body className={`${poppinsMedium.variable}
                ${poppinsSemibold.variable}
                ${poppinsBold.variable}
                ${poppinsExtraBold.variable}
                ${poppinsMedium.className}`
            }>
                <Navigation />
                <div className="p-8">{children}</div>
            </body>
        </html>
    )
}
