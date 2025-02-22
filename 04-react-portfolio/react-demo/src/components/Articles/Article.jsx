import "./Article.css"
export function Articles({title,articles}){
    return(
    <section id="2" className="article">
        <p>{title}</p>
        <hr />
        <div className="grid">
        {articles.map(article => 
            <ArticleCard
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
    
const ArticleCard= ({blogImg, dateOfPublish, category, title, description, readLink, linkLogo})=> (
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