
import TerminalBlock from "../_components/terminalBlock";

export default function Career(props: { idAttr: string }) {
  return <div className="block" id={props.idAttr}>
    <h1>career</h1>
    <div className="pl-5 pt-5">
      <TerminalBlock title={"Marketup (2021 - 2025)"}>
        - development and maintainment of company's internal web application <br />
        - rewriting application from jQuery to React <br />
        - development of a new GraphQL API to replace an old REST API <br />
        - redesigning and extending company's MySQL database <br />
        - development of company's Google Cloud infrastructure <br />&nbsp;
      </TerminalBlock>
      <TerminalBlock title={"AKSYSTEM (2020 - 2022)"}>
        - developing add-ons for the POHODA accounting system in .NET <br />
        - leveraging POHODA's XML API <br />
        - integration with POHODA's MS SQL database <br />
        - interacting with various REST APIs <br /> &nbsp;
      </TerminalBlock>
    </div>
  </div>
}