import { About } from "@/pages/components/About/About"
import { Nav} from "@/pages/components/Nav/Nav"
import { Articles} from "@/pages/components/Articles/Article"
import { Projects } from "@/pages/components/Projects/Project"
import { Talks } from "@/pages/components/Talks/Talk"
import { useContext } from "react"
import { AppContext } from "./appContext"

const Portfolio=() =>{
    const {name, description, article, project, talk} = useContext(AppContext)
    return(
        <div>
            {name != null &&(
            <Nav firstName= {name} lastName="Agarwal" links={['About', 'Article', 'Project', 'Talk']} btnlogo="/images/phone.svg" content="Contact Me"/>)}
            {name != null &&(
            <About name={name} img="/images/uifaces-popular-image.jpg" description={description} />)}
            <Articles articles={article}/>
            <Projects projects={project}/>
            <Talks talks={talk}/>
        </div>
    )
}
export default Portfolio;