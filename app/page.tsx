
import { HOME_PAGE_BLOCKS } from "./globals";

export default function Home() {
    return <>
        {HOME_PAGE_BLOCKS.map(({ component: Component, idAttr }) => <Component idAttr={idAttr} key={idAttr} />)}
    </>;
}
