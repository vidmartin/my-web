
export default function Contact(props: { idAttr: string }) {
    return <div className="block" id={props.idAttr}>
        <h1>contact</h1>
        <div>You can contact me using the form below :)</div>
        <textarea rows={10} className="w-full resize-none border-1 mt-5 mb-5 p-5 outline-0"></textarea>
        <div className="text-right">
            <a href="#">submit</a>
        </div>
    </div>
}
