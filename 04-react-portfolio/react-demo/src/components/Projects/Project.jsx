import "./Project.css"
export function Projects({title, projects}){
    return(
    <section id="3" className="project">
        <p>{title}</p>
        <hr />
        <div className="project__container">
        {projects.map(project => 
            <ProjectCard 
            logo={project.logo}
            title={project.title}
            description={project.description}
            link={project.link}
            arrow={project.arrow}
            /> 
        )}
        </div>
    </section>
    )
}
const ProjectCard=({logo,title, description, link, arrow})=>(
    <div className="content">
        <img id="yellow" src={logo} />
        <div className="project__description">
          <div className="project__name">
            <p>{title}</p>
            <a href="/" className="web__link">
              <p>{link}</p>
              <i>
                <svg>{arrow}</svg>
              </i>
            </a>
          </div>
          <p>{description}</p>
        </div>
    </div>
)