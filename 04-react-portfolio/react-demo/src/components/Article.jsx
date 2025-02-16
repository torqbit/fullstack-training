import "./Article.css"
export function Articles({title,article}){
    return(
    <section id="2" className="article">
        <p>{title}</p>
        <hr />
        <div className="grid">
        {article.map(article => 
            <ArticleClass  
            blogImg={article.blogImg} 
            dateOfPublish={article.dateOfPublish} 
            category={article.category} 
            title={article.title} 
            description={article.description} 
            readLink={article.readLink} 
            linkLogo={article.linkLogo}
            /> 
        )}
        </div>
    </section>
    )
}
    
const ArticleClass= ({blogImg, dateOfPublish, category, title, description, readLink, linkLogo})=> (
    <div className="blog">
        <div className="image">
          <img src={blogImg}/>
          <div className="date">
            <p>{dateOfPublish}</p>
            <p>{category}</p>
          </div>
        </div>
        <p>{title}</p>
        <p>{description}</p>
        <a href="#" className="article__link">
          <p>{readLink}</p>
          <i>
            <svg>{linkLogo}</svg>
          </i>
        </a>
      </div>
)
export const article = [<ArticleClass 
    blogImg={'./images/meetup.png'} 
    dateOfPublish={'20th Jan 2025'} 
    category={'meeting'} title={'How to use Meetups to generate leads'} 
    description={'You talk aboout something you built, and share the strategy of how someone made benefit out of it, and thats it.You are onto to your...'} 
    readLink={'Read Post'} 
    linkLogo={'width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.5L16.5 12L9 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"stroke-linejoin="round"'}/>]
