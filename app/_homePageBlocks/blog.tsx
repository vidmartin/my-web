
import TerminalBlock from "../_components/terminalBlock";
import { BLOG_POST_REPOSITORY } from "../globals";

export default function Blog(props: { idAttr: string }) {
    const postsArray = BLOG_POST_REPOSITORY.getAllMetadata();
    postsArray.sort((a, b) => a.publishDate.getTime() - b.publishDate.getTime());

    return <div className="block" id={props.idAttr}>
        <h1>blog</h1>
        I intend to write about things that interest me: computer science, mathematics, AI, philosophy. And perhaps about my life as well. However, since this web is relatively new, there isn't many posts yet. Stay tuned for more :)
        <div className="pl-5 pt-5">
            {postsArray.slice(0, 3).map(
                (post, i) => <TerminalBlock key={i} title={post.title}>{post.description}</TerminalBlock>
            )}
        </div>
    </div>;
}