import styles from '@/styles//Portfolio/Projects.module.css'
import {FC} from "react";

export type ProjectProps ={
    logo:string,
    title:string,
    description:string,
    link:string,
    arrow:string;
}
export const Projects: FC<{projects : ProjectProps[]}>= ({projects}) =>{
    // const updateColour = (logo:string) =>{
    //   if (logo.includes("project1")) return styles.project1;  
    //   if (logo.includes("project2")) return styles.project2;  
    // }
    return(
    <section id="Projects" className={styles.project}>
        <p>Projects</p>
        <hr />
        <div className={styles.project__container}>
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
const ProjectCard: FC<({logo:string,title: string, description:string, link:string, arrow:string})>=({logo,title, description, link, arrow})=>(
    <div className={styles.content}>
        <img src={logo} />
        <div className={styles.project__description}>
          <div className={styles.project__name}>
            <p>{title}</p>
            <a href="/" className={styles.web__link}>
              <p>{link}</p>
              <i>
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M8.25 6H18V15.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </i>
            </a>
          </div>
          <p>{description}</p>
        </div>
    </div>
)