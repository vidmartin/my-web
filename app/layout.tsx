import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HOME_PAGE_BLOCKS } from "./globals";

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
            {HOME_PAGE_BLOCKS.map(({ name, idAttr }) => <li key={idAttr}><Link href={`/#${idAttr}`}>{name} <div className="hover-indicator" style={{ position: "absolute", right: "1cm" }}>&gt;</div></Link></li>)}
          </ul>
          <br/>
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
