
export default async function BlogPost(props: PageProps<"/blog/[id]">) {
    // TODO: get blog post from BLOG_POSTS and render it
    
    const params = await props.params;
    return <div>Hello, this is blog post #{params.id}</div>
}