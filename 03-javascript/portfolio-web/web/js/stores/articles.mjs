class ArticleStore {
  /**
   * Constructor to initialize the store using local storage
   * @param {*} accountWithArticles
   */
  constructor(accountWithArticles) {
    if (accountWithArticles && accountWithArticles.size > 0) {
      // Iterate through each user account and their articles
      for (const [account, articles] of accountWithArticles) {
        if (Array.isArray(articles) && articles.length > 0) {
          // Store articles array in localStorage with user email as key
          localStorage.setItem(`articles-${account.email}`, JSON.stringify(articles));
        }
      }
    }
  }

  /**
   * Add a method to add an article to the user's account
   * @param {*} account
   * @param {*} article
   */
  addArticle(account, article) {
    //console.log('article',article)
    if(localStorage.getItem(`articles-${account}`) == null){
      localStorage.setItem(`articles-${account}`,JSON.stringify(article))
    } 
    else {
      const articlesString= localStorage.getItem(`articles-${account}`)
      const articlesArray= JSON.parse(articlesString)
      articlesArray.push(article)
      localStorage.setItem(`articles-${account}`,JSON.stringify(articlesArray))
    }
    }
  /**
   * Add a method to get all articles for a user
   * @param {*} account
   * @returns
   */
  getArticles(account) {
    const articleString=localStorage.getItem(`articles-${account}`)
    const articleArray=JSON.parse(articleString)
    return articleArray
  }
  deleteArticles(account){
    localStorage.removeItem(`articles-${account}`)
  }

  /**
   * Add a method to get the latest article of a user
   */
  getLatestArticle(account) {
    for(let i=0; i<localStorage.length; i=i+1){
      if (localStorage.key(i)==`articles-${account.email}`){
        const articleString=localStorage.getItem(localStorage.key(i))
        const articlesarray=JSON.parse(articleString)
        const latestArticleDate= articlesarray.map(a=>new Date(a.dateOfPublish).getTime())
        const latestArticle={date:0, article:object[0]}
        for (let i in articlesarray){
          if (latestArticleDate[i]> latestArticle.date){
            latestArticle.date= latestArticleDate[i]
            latestArticle.article= object[i]
          }
        return latestArticle.article
        }
      }
    }
  }

  /**
   * Add a method to get the oldest article of a user
   */
  getOldestArticle(account) {
    for(let i=0; i<localStorage.length; i=i+1){
      if (localStorage.key(i)==`articles-${account.email}`){
        const articlesString=localStorage.getItem(localStorage.key(i))
        const articlesarray=JSON.parse(articlesString)
        const oldestArticleDate= articlesarray.map(a=>new Date(a.dateOfPublish).getTime())
        const oldestArticle={date:oldestArticleDate[0], article:object[0]}
        for (let j in articlesarray){
          if (oldestArticle[j] < oldestArticle.date){
            oldestArticle.date= oldestArticleDate[j]
            oldestArticle.article= object[j]
          }
    return oldestArticle.article
    }
  }
}
}
}
export default ArticleStore;
