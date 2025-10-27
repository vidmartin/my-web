import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const courierPrime = Courier_Prime({ weight: "400" });

export const metadata: Metadata = {
  title: "vidmartin",
  description: "personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.className} antialiased`}
      >
        <div className="title">
          <div>vidmartin</div>
          <div>=========</div>
        </div>
        <div className="links">
          <ul>
            <li><Link href="/#about-me">about me</Link></li>
            <li><Link href="/#career">career</Link></li>
            <li><Link href="/#projects">projects</Link></li>
            <li><Link href="/#blog">blog</Link></li>
          </ul>
          <br></br>
          <ul>
            <li><a href="https://github.com/vidmartin">github</a></li>
            <li><a href="https://cz.linkedin.com/in/martin-vidmar-0168a1195">linkedin</a></li>
          </ul>
        </div>
        <div style={{ maxWidth: "30cm", display: "inline-block", textAlign: "justify" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
