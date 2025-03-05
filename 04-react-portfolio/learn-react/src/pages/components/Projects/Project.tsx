import styles from '@/styles/Projects.module.css'
import {FC} from "react";

export type ProjectProps ={
    logo:string,
    title:string,
    description:string,
    link:string,
    arrow:string;
}
export const Projects: FC<{projects : ProjectProps[]}>= ({projects}) =>{
    return(
    <section id="3" className={styles.project}>
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
                <svg>{arrow}</svg>
              </i>
            </a>
          </div>
          <p>{description}</p>
        </div>
    </div>
)