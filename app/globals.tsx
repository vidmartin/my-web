
import React from "react";
import AboutMe from "./_homePageBlocks/aboutMe";
import Career from "./_homePageBlocks/career";
import Projects from "./_homePageBlocks/projects";
import Blog from "./_homePageBlocks/blog";
import Contact from "./_homePageBlocks/contact";
import { readdir } from "fs/promises";

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

type BlogPostMetadata = {
    id: number,
    title: string,
    description: string,
    publishDate: Date,
}

export interface IBlogPostRepository {
    getAllMetadata(): BlogPostMetadata[],
    getMetadataById(id: number): BlogPostMetadata,
    getContentById(id: number): string,
}

const BLOG_POSTS: { [key: number]: BlogPostMetadata } = {
    1: {
        id: 1,
        title: "My first post",
        description: "The time to unleash my wisdom upon the world has come. An exciting time indeed!",
        publishDate: new Date(2025, 11, 11),
    },
    2: {
        id: 2,
        title: "My first post",
        description: "The time to unleash my wisdom upon the world has come. An exciting time indeed!",
        publishDate: new Date(2025, 11, 11),
    }
}

export class MockBlogPostRepository implements IBlogPostRepository {
    getAllMetadata(): BlogPostMetadata[] {
        return Object.values(BLOG_POSTS);
    }
    getMetadataById(id: number): BlogPostMetadata {
        return BLOG_POSTS[id];
    }
    getContentById(id: number): string {
        return "this is testing content";
    }
}

export const BLOG_POST_REPOSITORY = new MockBlogPostRepository();