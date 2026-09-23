import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"NFL Photo Finder — Discover the game",description:"A personal radar for NFL photography worth seeing."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
