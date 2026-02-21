
import HomePageBlock from "../_components/homePageBlock";

export default function AboutMe(props: { idAttr: string }) {
    return <HomePageBlock idAttr={props.idAttr}>
        <div className="text-center">
            <div className="me" />
        </div>
        <h1>about me</h1>
        <div className="text-justify">
            <p>
                I am passionate about programming since early childhood. At 23 years of age, I
                already have several years of working experience in this field. I have gained a
                Bachelor's degree at FIT CTU with the specialization Artificial Intelligence, and
                I'm continuing studying there for a Master's degree. I have a lot of personal
                projects, many of them having been made for school.
            </p>
            <p className="mt-5">
                I have already learned enough about Computer Science to know that I know
                nothing at all, and thus I'm always eager to learn new things, discover new
                technologies, and develop my soft skills. Apart from programming, I also like
                music and am a self-taught piano and guitar user.
            </p>
        </div>
    </HomePageBlock>;
}