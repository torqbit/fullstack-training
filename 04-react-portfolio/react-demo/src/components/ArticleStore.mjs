import { article } from "./Article"

class Article{
    constructor(blogImg, dateOfPublish, category, title, description, readLink, linkLogo){
        this.blogImg=blogImg
        this.dateOfPublish= dateOfPublish
        this.category=category
        this.title= title
        this.description=description
        this.readLink= readLink
        this.linkLogo= linkLogo
    }
}
class ArticleStore{
    constructor(){
        this.articles = []
    }
    addArticle(article){
        this.articles.push(article)
    }
}
const a1= new Article('./images/meetup.png','20th Jan 2025','Meetups','How to use Meetups to generate leads','You talk aboout something you built, and share the strategy of how someone made benefit out of it, and thats it.You are onto to your...','Read Post')
console.log(a1)
const articleList = new ArticleStore()
articleList.addArticle(a1)
console.log(articleList)