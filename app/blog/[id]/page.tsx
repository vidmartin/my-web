
export default async function BlogPost(props: PageProps<"/blog/[id]">) {
    const params = await props.params;
    return <div>Hello, this is blog post #{params.id}</div>
}