class UserProfile {
  constructor(name, jobTitle, description, profileImg) {
    this.name = name;
    this.title = jobTitle;
    this.description = description;
    this.profileImg = profileImg;
  }
}

export class Article {
  constructor(blogImg, dateOfPublish, category, title, description, link) {
    this.blogImg = blogImg;
    this.dateOfPublish = dateOfPublish;
    this.category = category;
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

export class Project {
  constructor(logo,title, description, link) {
    this.logo = logo;
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

export class Talk {
  constructor(blogImg, language, title, description) {
    this.blogImg = blogImg;
    this.language = language;
    this.title = title;
    this.description = description;
  }
}
