//my projects

const github_baseurl = "https://github.com/code-here";
const website_baseurl = "https://code-here.github.io";

const PROJECT_DATA = [
    {
        id: 1,
        title: "Hacker Stories",
        github_link: `${ github_baseurl }/hackerStories`,
        website_link: `${ website_baseurl }/hackerStories`,
        description: "react app: fetch news from hacker stories api",
        technology: "react",
        tags: ["ReactJs", "Nodejs", "Web"],
        type: "web",
        readme: "https://raw.githubusercontent.com/code-here/hackerStories/main/README.md"
    },
    {
        id: 2,
        title: "Nasa Daily Feed",
        github_link: `${ github_baseurl }/nasa-dailyFeedApp`,
        website_link: undefined,
        description: "nodejs app: fetches data from nasa's APOD api",
        technology: "nodejs",
        tags: ["NodeJs", "API", "NASA APOD"],
        type: "web",
        readme: "https://raw.githubusercontent.com/code-here/nasa-dailyFeedApp/main/README.md"
    },
    {
        id: 3,
        title: "Nasa Apod Cli",
        github_link: `${ github_baseurl }/nasa_apod`,
        website_link: undefined,
        description: "rust app: cli app to fetch nasa astronomical pic of the day",
        technology: "rust",
        tags: ["Rust", "CLI", "NASA APOD"],
        type: "cli",
        readme: "https://raw.githubusercontent.com/code-here/nasa_apod/main/README.md"
    },
    {
        id: 4,
        title: "Tabulate",
        github_link: `${ github_baseurl }/tabulate`,
        website_link: undefined,
        description: "rust app: convert csv to pretty tables",
        technology: "rust",
        tags: ["Rust", "CLI", "csv", "tables"],
        type: "cli",
        readme: "https://raw.githubusercontent.com/code-here/tabulate/main/README.md"
    },
    {
        id: 5,
        title: "Sorting Algorithms",
        github_link: `${ github_baseurl }/sorting_algos`,
        website_link: undefined,
        description: "some sorting algorithms in rust",
        technology: "rust",
        tags: ["Rust", "CLI", "algorithms"],
        type: "cli",
        readme: "https://raw.githubusercontent.com/code-here/sorting_algos/main/README.md"
    },
    {
        id: 6,
        title: "Task Manager",
        github_link: `${ github_baseurl }/task-manager`,
        website_link: undefined,
        description: "task manager REST api written in nodejs",
        technology: "nodejs",
        tags: ["Nodejs", "REST API", "MongoDB", "Mongoose", "Express"],
        type: "web",
        readme: "https://raw.githubusercontent.com/code-here/task-manager/main/README.md"
    },
    {
        id: 7,
        title: "Crown Clothing",
        github_link: `${ github_baseurl }/crwn_clothing`,
        website_link: "crwn-clothing-mart.herokuapp.com",
        description: "shopping web app in made with react, redux",
        technology: "react",
        tags: ["Reactjs", "Redux", "SCSS", "responsive", "redux-saga", "firebase", "react-router", "sass", "nodejs", "express"],
        type: "web",
        readme: "https://raw.githubusercontent.com/code-here/crwn_clothing/main/README.md"
    },
    {
        id: 8,
        title: "REST API in rust",
        github_link: `${ github_baseurl }/rust_api`,
        website_link: undefined,
        description: "a user management REST API made with actix-web and diesel",
        technology: "rust",
        tags: ["rust", "diesel", "actix-web", "rust-argon2", "actix-identity", "auth", "API", "Backend"],
        type: "web",
        readme: "https://raw.githubusercontent.com/code-here/rust_api/main/README.md"
    },
    {
        id: 9,
        title: "cat-rs",
        github_link: `${ github_baseurl }/cat-rs`,
        website_link: undefined,
        description: "a simple implimentation of linux utility cat in rust",
        technology: "rust",
        tags: ["rust", "linux", "command"],
        type: "cli",
        readme: "https://raw.githubusercontent.com/code-here/cat-rs/main/README.md"
    },
    {
        id: 10,
        title: "Time normalizer",
        github_link: `${ github_baseurl }/time-normalizer`,
        website_link: undefined,
        description: "a cli app which normalizes time",
        technology: "rust",
        tags: ["rust", "cli"],
        type: "cli",
        readme: "https://raw.githubusercontent.com/code-here/time-normalizer/main/README.md"
    },
    {
        id: 11,
        title: "My website",
        github_link: `${ github_baseurl }/my_website`,
        website_link: `${ website_baseurl }/my_website`,
        description: "a website to showcase my projects",
        technology: "react",
        tags: ["reactjs", "website", "nodejs", "HTML", "sass"],
        type: "web",
        readme: "https://raw.githubusercontent.com/code-here/my_website/main/README.md"
    },
    
]

export default PROJECT_DATA;