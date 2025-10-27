
type Job = {
  name: string,
  role: string,
  yearFrom: number,
  yearTo: number,
  activities: string[],
};

function JobView(props: { jobs: Job[] }) {
  const lines: string[] = [];

  for (const job of props.jobs) {
    lines.push(`+ ${job.name}: ${job.role} (${job.yearFrom} - ${job.yearTo})`);
    lines.push("|");
    for (const activity of job.activities) {
      lines.push(`|   - ${activity}`);
    }
    lines.push("|");
  }

  return <div className="pl-5 pt-5 whitespace-pre-wrap">{lines.join("\n")}</div>
}

const JOBS: Job[] = [
  {
    name: "Marketup",
    role: "backend developer",
    yearFrom: 2021,
    yearTo: 2025,
    activities: [
      "development and maintainment of company's internal web application",
      "rewriting application from jQuery to React",
      "development of a new GraphQL API to replace an old REST API",
      "redesigning and extending company's MySQL database",
      "development of company's Google Cloud infrastructure"
    ]
  },
  {
    name: "AKSYSTEM",
    role: ".NET developer",
    yearFrom: 2020,
    yearTo: 2022,
    activities: [
      "developing add-ons for the POHODA accounting system in .NET",
      "leveraging POHODA's XML API",
      "integration with POHODA's MS SQL database",
      "interacting with various REST APIs",
    ]
  }
];

export default function Career(props: { idAttr: string }) {
  return <div className="block" id={props.idAttr}>
    <h1>career</h1>
    <JobView jobs={JOBS} />
  </div>
}