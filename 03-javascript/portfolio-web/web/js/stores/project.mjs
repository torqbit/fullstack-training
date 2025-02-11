class ProjectStore {
    constructor(accountWithProjects) {
      if (accountWithProjects && accountWithProjects.size > 0) {
        for (const [account, projects] of accountWithProjects) {
          if (Array.isArray(projects) && projects.length > 0) {
            localStorage.setItem(`projects-${account}`, JSON.stringify(projects));
          }
        }
      }
    }
    addProject(account, project) {
      if(localStorage.getItem(`projects-${account}`) == null){
        localStorage.setItem(`projects-${account}`,JSON.stringify(project))
      } 
      else {
        const projectsString= localStorage.getItem(`projects-${account}`)
        const projectsArray= JSON.parse(projectsString)
        articlesArray.push(project)
        localStorage.setItem(`projects-${account}`,JSON.stringify(projectsArray))
      }
    }
    getProjects(account) {
      const projectString=localStorage.getItem(`projects-${account}`)
      const projectArray=JSON.parse(projectString)
      return projectArray
    }
    deleteProjects(account){
      localStorage.removeItem(`projects-${account}`)
    }
}
export default ProjectStore;
  