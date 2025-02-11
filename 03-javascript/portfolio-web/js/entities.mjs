class UserProfile {
  constructor(name, jobTitle, description, profileImg) {
    this.name = name;
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

class Project {}

class Talks {}
