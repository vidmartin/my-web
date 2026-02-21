import HomePageBlock from "../_components/homePageBlock";

export default function Contact(props: { idAttr: string, initOpacity: number }) {
    return <HomePageBlock idAttr={props.idAttr} initOpacity={props.initOpacity}>
        <h1>contact</h1>
        <div>You can contact me using the form below :)</div>
        <textarea rows={10} className="w-full resize-none border-1 mt-5 mb-5 p-5 outline-0"></textarea>
        <div className="text-right">
            <a href="#">submit</a>
        </div>
    </HomePageBlock>
}
