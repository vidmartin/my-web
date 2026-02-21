
import Link from "next/link";
import TerminalBlock from "../_components/terminalBlock";
import { BLOG_POST_REPOSITORY, displayDate } from "../globals";
import { PaginatedTerminalBlocks } from "../_components/paginatedTerminalBlocks";
import HomePageBlock from "../_components/homePageBlock";

export default async function Blog(props: { idAttr: string, initOpacity: number }) {
    const postsArray = await BLOG_POST_REPOSITORY.getAllMetadata();
    postsArray.sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate));

    return <HomePageBlock idAttr={props.idAttr} initOpacity={props.initOpacity}>
        <h1>blog</h1>
        I intend to write about things that interest me: computer science, mathematics, AI, philosophy. And perhaps about my life as well. However, since this web is relatively new, there isn't many posts yet. Stay tuned for more :)
        {postsArray.length > 0 ? <div className="pl-5 pt-5">
            <PaginatedTerminalBlocks blocksPerPage={3} blocks={
                postsArray.map(post => ({
                    content: post.description,
                    title: `${post.title}`,
                    href: `/blog/${post.id}`,
                    additionalTitle: ` (posted ${displayDate(new Date(Date.parse(post.publishDate)))})`,
                }))
            } />
        </div> : <div className="pl-10 pt-10 text-center">(no content yet)</div>}
    </HomePageBlock>;
}