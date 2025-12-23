
import React from "react";
import AboutMe from "./_homePageBlocks/aboutMe";
import Career from "./_homePageBlocks/career";
import Projects from "./_homePageBlocks/projects";
import Blog from "./_homePageBlocks/blog";
import Contact from "./_homePageBlocks/contact";
import { readdir } from "fs/promises";
import { MockBlogPostRepository } from "./_blogRepository/mockBlogRepository";
import { FilesystemBlogPostRepository } from "./_blogRepository/filesystemBlogRepository";

type HomePageBlockInfo = {
    name: string,
    component: (props: { idAttr: string }) => React.ReactElement | Promise<React.ReactElement>,
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

export const BLOG_POST_REPOSITORY = process.env["BLOG_POSTS_DIR"] != undefined ?
    new FilesystemBlogPostRepository(process.env["BLOG_POSTS_DIR"]) :
    new MockBlogPostRepository(); // TODO: replace MockBlogPostRepository with sth like EmptyBlogPostRepository
