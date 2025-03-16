import { About } from "@/components/PortfolioEditor/About/About"
import { Nav} from "@/components/PortfolioEditor/Nav/Nav"
import { Articles} from "@/components/PortfolioEditor/Articles/Article"
import { Projects } from "@/components/PortfolioEditor/Projects/Project"
import { Talks } from "@/components/PortfolioEditor/Talks/Talk"
import { useContext } from "react"
import { AppContext } from "./appContext"

const Portfolio=() =>{
    const {state} = useContext(AppContext)
    return(
        <div>
            <Nav firstName={state.about.firstname} lastName={state.about.lastname} links={['About','Articles','Projects','Talks']} btnlogo="/images/phone.svg" content="Let's Talk" />
            <About  img={state.about.img} name={state.about.name} description={state.about.description}/>
            {<Articles articles={state.articles} />}
            {/* // <Projects projects={project}/>
            // <Talks talks={talk}/> */ }
        </div>
    )
}
export default Portfolio;