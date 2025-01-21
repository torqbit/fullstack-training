// Classes for the portfolio entities

//about
class Person {
  constructor(babyName, jobTitle, description, profileImg) {
    this.name = babyName;
    this.title = jobTitle;
    this.description = description;
    this.profileImg = profileImg;
  }

  log() {
    console.log(this.title);
  }
}

class Article {
  constructor(blogImg, dateOfPublish, category, title, description, link) {
    this.blogImg = blogImg;
    this.dateOfPublish = dateOfPublish;
    this.category = category;
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

class ArticleStore {
  constructor(articlesArray) {
    this.articles = articlesArray;
  }

  addArticle(article) {
    this.articles.push(article);
  }

  addMultipleArticles(articles) {
    this.articles.concat(articles);
  }

  deleteArticle(link) {
    this.articles = this.articles.filter((a) => a.link != link);
  }
  updateArticle(newArticle) {
    //
  }

  listArticles() {
    return this.articles;
  }
}

class PortfolioService {
  constructor(articlesList, projectsList, talksList) {
    this.articlesStore = new ArticleStore(articlesList);
    // this.projectsStore = new ProjectsStore(projectsList);
    // this.talksStore = new TalksStore(talksList);
    //..
  }

  addArticle(article) {
    this.articlesStore.addArticle(article);
  }

  listArticles() {
    return this.articlesStore.listArticles();
  }

  /**
   * Find the latest article
   */
  latestArticle() {}
}

const service = new PortfolioService([], [], []);
export default service;
