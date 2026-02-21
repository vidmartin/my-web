
import React from "react";
import AboutMe from "./_homePageBlocks/aboutMe";
import Career from "./_homePageBlocks/career";
import Projects from "./_homePageBlocks/projects";
import Blog from "./_homePageBlocks/blog";
import Contact from "./_homePageBlocks/contact";
import { readdir } from "fs/promises";
import { MockBlogPostRepository } from "./_blogRepository/mockBlogRepository";
import { FilesystemBlogPostRepository } from "./_blogRepository/filesystemBlogRepository";
import { EmptyBlogPostRepository } from "./_blogRepository/emptyBlogPostRepository";
import { HardCodedProjectsRepository } from "./_projectRepository/hardCodedProjectRepository";
import { CachedBlogPostRepository } from "./_blogRepository/cachedBlogPostRepository";
import TechStack from "./_homePageBlocks/techStack";

type HomePageBlockInfo = {
    name: string,
    component: (props: { idAttr: string, initOpacity: number }) => React.ReactElement | Promise<React.ReactElement>,
    idAttr: string,
};

export const HOME_PAGE_BLOCKS: HomePageBlockInfo[] = [
    {
        name: "about me",
        component: AboutMe,
        idAttr: "about-me",
    },
    {
        name: "stack",
        component: TechStack,
        idAttr: "stack",
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
    // {
    //     name: "contact",
    //     component: Contact,
    //     idAttr: "contact",
    // }
];

export const ENV_BLOG_POSTS_DIR = "BLOG_POSTS_DIR";
export const ENV_BLOG_POSTS_CACHE_LIFETIME = "BLOG_POSTS_CACHE_LIFETIME";

export const BLOG_POST_REPOSITORY = process.env[ENV_BLOG_POSTS_DIR] != undefined ?
    new CachedBlogPostRepository(
        new FilesystemBlogPostRepository(process.env[ENV_BLOG_POSTS_DIR]),
        parseInt(process.env[ENV_BLOG_POSTS_CACHE_LIFETIME] ?? "10")
    ) : new EmptyBlogPostRepository();

export const PROJECT_REPOSITORY = new HardCodedProjectsRepository();

export function displayDate(date: Date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}