import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HOME_PAGE_BLOCKS } from "./globals";
import { MathJax, MathJaxContext } from "better-react-mathjax";

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
                <MathJaxContext>
                    <div className="title">
                        <div>vidmartin</div>
                        <div>=========</div>
                    </div>
                    <div className="links">
                        <ul>
                            {HOME_PAGE_BLOCKS.map(
                                ({ name, idAttr }) => <li key={idAttr}>
                                    <Link href={`/#${idAttr}`}>
                                        {name}
                                        <div className="hover-indicator" style={{ position: "absolute", right: "1cm" }}>&gt;</div>
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <br />
                        <ul>
                            <li><a href="https://github.com/vidmartin">github</a></li>
                            <li><a href="https://cz.linkedin.com/in/martin-vidmar-0168a1195">linkedin</a></li>
                        </ul>
                    </div>
                    <div className="links-narrow">
                        {HOME_PAGE_BLOCKS.map(
                            ({ name, idAttr }, i) => <span key={idAttr}>
                                {i > 0 ? ' : ' : ''}
                                <Link href={`/#${idAttr}`}>{name}</Link>
                            </span>
                        )}
                        <div style={{ height: "1ch" }}></div>
                        <a href="https://github.com/vidmartin">github</a>
                        {" : "}
                        <a href="https://cz.linkedin.com/in/martin-vidmar-0168a1195">linkedin</a>
                    </div>
                    <div>
                        {children}
                    </div>
                    <div className="footer">
                        <div>
                            icons made by <br />
                            <a href="https://www.freepik.com" title="Freepik">Freepik</a>/<a href="https://www.flaticon.com/authors/pocike" title="pocike">pocike</a>/<a href="https://www.flaticon.com/authors/fantasyou" title="Fantasyou">Fantasyou</a>/<a href="https://www.flaticon.com/authors/phoenix-group" title="Phoenix Group">Phoenix Group</a><br/>
                            from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        <br />
                        <div>© vidmartin 2026</div>
                    </div>
                </MathJaxContext>
            </body>
        </html>

    );
}
