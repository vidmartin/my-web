
export default function Blog(props: { idAttr: string }) {
    return <div className="block" id={props.idAttr}>
        <h1>blog</h1>
        I intend to write about things that interest me: computer science, mathematics, AI, philosophy. And perhaps about my life as well. However, since this web is relatively new, there isn't many posts yet. Stay tuned for more :)
    </div>;
}