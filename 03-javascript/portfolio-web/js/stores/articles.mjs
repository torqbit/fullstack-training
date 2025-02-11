class ArticleStore {
  /**
   * Constructor to initialize the store using local storage
   * @param {*} accountWithArticles
   */
  constructor(accountWithArticles) {
    if (accountWithArticles && accountWithArticles.length > 0) {
      // Iterate through each user account and their articles
      for (const [account, articles] of accountWithArticles) {
        if (Array.isArray(articles) && articles.length > 0) {
          // Store articles array in localStorage with user email as key
          localStorage.setItem(`articles-${account}`, JSON.stringify(articles));
        }
      }
    }
  }

  /**
   * Add a method to add an article to the user's account
   * @param {*} account
   * @param {*} article
   */
  addArticle(account, article) {}

  /**
   * Add a method to get all articles for a user
   * @param {*} account
   * @returns
   */
  getArticles(account) {}

  /**
   * Add a method to get the latest article of a user
   */
  getLatestArticle(account) {}

  /**
   * Add a method to get the oldest article of a user
   */
  getOldestArticle(account) {}
}

export default ArticleStore;
