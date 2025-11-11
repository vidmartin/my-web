
import React from "react";
import AboutMe from "./_homePageBlocks/aboutMe";
import Career from "./_homePageBlocks/career";
import Projects from "./_homePageBlocks/projects";
import Blog from "./_homePageBlocks/blog";
import Contact from "./_homePageBlocks/contact";

type HomePageBlockInfo = {
    name: string,
    component: (props: { idAttr: string }) => React.ReactElement,
    idAttr: string,
};

export const HOME_PAGE_BLOCKS: HomePageBlockInfo[] = [
    {
        name: "about me",
        component: AboutMe,
        idAttr: "about-me",
    },
    {
        name: "career",
        component: Career,
        idAttr: "career",
    },
    {
        name: "projects",
        component: Projects,
        idAttr: "projects",
    },
    {
        name: "blog",
        component: Blog,
        idAttr: "blog",
    },
    {
        name: "contact",
        component: Contact,
        idAttr: "contact",
    }
];
