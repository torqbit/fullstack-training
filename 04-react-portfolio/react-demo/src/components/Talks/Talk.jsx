import "./Talk.css"
export function Talks({title, talk}){
    return(
    <section id="4" className="talks">
        <p>{title}</p>
        <hr />
        <div className="talks__topic">
        {talk.map(talk=> 
            <TalkCard 
            blogImg={talk.blogImg}
            language={talk.language}
            title={talk.title}
            description={talk.description}
            /> 
        )}
        </div>
    </section>
    )
}
const TalkCard=({blogImg, language, title, description})=>(
    <div className="language">
        <img src={blogImg} />
        <p id="white">{language}</p>
        <p>{title}</p>
        <p>{description}</p>
      </div>
)