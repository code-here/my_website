//my projects

const github_baseurl = "https://github.com/code-here";
const website_baseurl = "https://code-here.github.io";

const projects = [
    {
        id: 1,
        title: "Hacker Stories",
        github_link: `${ github_baseurl }/hackerStories`,
        website_link: `${ website_baseurl }/hackerStories`,
        description: "react app: fetch news from hacker stories api",
        technology: "react",
        tags: ["ReactJs", "Nodejs", "Web"],
        type: "web"
    },
    {
        id: 2,
        title: "Nasa Daily Feed",
        github_link: `${ github_baseurl }/nasa-dailyFeedApp`,
        website_link: undefined,
        description: "nodejs app: fetches data from nasa's APOD api",
        technology: "nodejs",
        tags: ["NodeJs", "API", "NASA APOD"],
        type: "web"
    },
    {
        id: 3,
        title: "Nasa Apod Cli",
        github_link: `${ github_baseurl }/nasa_apod`,
        website_link: undefined,
        description: "rust app: cli app to fetch nasa astronomical pic of the day",
        technology: "rust",
        tags: ["Rust", "CLI", "NASA APOD"],
        type: "cli"
    },
    {
        id: 4,
        title: "Tabulate",
        github_link: `${ github_baseurl }/tabulate`,
        website_link: undefined,
        description: "rust app: convert csv to pretty tables",
        technology: "rust",
        tags: ["Rust", "CLI", "csv", "tables"],
        type: "cli"
    },
    {
        id: 5,
        title: "Sorting Algorithms",
        github_link: `${ github_baseurl }/sorting_algos`,
        website_link: undefined,
        description: "some sorting algorithms in rust",
        technology: "rust",
        tags: ["Rust", "CLI", "algorithms"],
        type: "cli"
    },
    {
        id: 6,
        title: "Task Manager",
        github_link: `${ github_baseurl }/task-manager`,
        website_link: undefined,
        description: "task manager REST api written in nodejs",
        technology: "nodejs",
        tags: ["Nodejs", "REST API", "MongoDB", "Mongoose", "Express"],
        type: "web"
    },
    {
        id: 7,
        title: "Crown Clothing",
        github_link: `${ github_baseurl }/crwn_clothing`,
        website_link: undefined,
        description: "shopping web app in made with react, redux",
        technology: "react",
        tags: ["Reactjs", "Redux", "SCSS"],
        type: "web"
    }
]

export default projects;