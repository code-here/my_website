import { createContext, useEffect, useState } from "react";

import PROJECT_DATA from './projects.data';

export const ProjectContext = createContext({
    projects: [],
    selectProject: () => {}
});


export const ProjectProvider = ({ children }) => {
    const [ projects, setProjects ] = useState([]);

    useEffect(() => setProjects(PROJECT_DATA), []);

    const selectProject = (id) => projects.find(project => project.id === id);

    return (
        <ProjectContext.Provider value={{
            projects,
            selectProject
        }}>{ children }</ProjectContext.Provider>
    )
}