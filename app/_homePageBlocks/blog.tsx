
import Link from "next/link";
import TerminalBlock from "../_components/terminalBlock";
import { BLOG_POST_REPOSITORY } from "../globals";

export default async function Blog(props: { idAttr: string }) {
    const postsArray = await BLOG_POST_REPOSITORY.getAllMetadata();
    postsArray.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
    const postsToShow = postsArray.slice(0, 3);

    return <div className="block" id={props.idAttr}>
        <h1>blog</h1>
        I intend to write about things that interest me: computer science, mathematics, AI, philosophy. And perhaps about my life as well. However, since this web is relatively new, there isn't many posts yet. Stay tuned for more :)
        <div className="pl-5 pt-5">
            {postsToShow.map(
                (post, i) => <TerminalBlock key={i} title={post.title} href={`/blog/${post.id}`}>{post.description}</TerminalBlock>
            )}
        </div>
        <br />Showing {postsToShow.length} out of {postsArray.length} posts. <Link href="#">See all</Link>
    </div>;
}