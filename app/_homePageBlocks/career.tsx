
import HomePageBlock from "../_components/homePageBlock";
import TerminalBlock from "../_components/terminalBlock";

export default function Career(props: { idAttr: string, initOpacity: number }) {
  return <HomePageBlock idAttr={props.idAttr} initOpacity={props.initOpacity}>
    <h1>career</h1>
    <div className="pl-5 pt-5">
      <TerminalBlock title={"Marketup (2021 - 2025)"}>
        <ul className="list-dash">
          <li>development and maintainment of company's internal web application</li>
          <li>rewriting application from jQuery to React</li>
          <li>development of a new GraphQL API to replace an old REST API</li>
          <li>redesigning and extending company's MySQL database</li>
          <li>development of company's Google Cloud infrastructure</li>
          <li>collaboration with colleagues in searching for effective solutions</li>
        </ul>
      </TerminalBlock>
      <TerminalBlock title={"AKSYSTEM (2020 - 2022)"}>
        <ul className="list-dash">
          <li>developing add-ons for the POHODA accounting system in .NET</li>
          <li>leveraging POHODA's XML API</li>
          <li>integration with POHODA's MS SQL database</li>
          <li>interacting with various REST APIs</li>
          <li>testing add-ons on a testing environment</li>
        </ul>
      </TerminalBlock>
    </div>
  </HomePageBlock>
}