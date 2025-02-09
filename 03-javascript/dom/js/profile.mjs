class UserProfileService {
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

  /**
   * (1)Function to return the article based on the link
   * @param {*} link
   */
  getArticle(link) {
    // to get the article
    // analyticsService.push({'view', link, 'article'})
  }

  /**
   * (4)Find the most viewed article
   */
  getMostViewedArticle() {}
}
export default UserProfileService;
