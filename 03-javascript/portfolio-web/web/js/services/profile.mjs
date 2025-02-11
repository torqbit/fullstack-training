import ArticleStore from "../stores/articles.mjs";
import ProjectStore from "../stores/project.mjs";
import TalkStore from "../stores/talks.mjs";

class UserProfileService {
  constructor() {
    this.articlesStore = new ArticleStore(new Map());
    this.projectStore = new ProjectStore(new Map());
    this.talkStore = new TalkStore(new Map());
  }

  addArticle(account,article) {
    this.articlesStore.addArticle(account,article);
  }

  getArticles(account) {
    return this.articlesStore.getArticles(account);
  }
  addProject(account,project){
    this.projectStore.addProject(account,project);
  }
  getProjects(account){
    return this.projectStore.getProjects(account);
  }
  addTalk(account,talk){
    this.talkStoreStore.addTalk(account,talk);
  }
  getTalks(account){
    return this.talkStore.getTalks(account);
  }
}

/**
   * Find the latest article
   */
  //latestArticle() {}
  
  /**
   * (1)Function to return the article based on the link
   * @param {*} link
   */
  //getArticle(link) {
    // to get the article
    // analyticsService.push({'view', link, 'article'})
  //}

  /**
   * (4)Find the most viewed article
   */
  //getMostViewedArticle() {}
//}
export default UserProfileService;
