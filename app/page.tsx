
import { HOME_PAGE_BLOCKS } from "./globals";

export default function Home() {
    return <>
        {HOME_PAGE_BLOCKS.map(
            ({ component: Component, idAttr }, i) => <Component
                idAttr={idAttr}
                key={idAttr}
                initOpacity={i > 0 ? 0.0 : 1.0}
            />
        )}
    </>;
}
