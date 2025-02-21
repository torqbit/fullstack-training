import { Nav } from './components/Nav/Nav';
import { About } from './components/About/About';
import { Articles } from './components/Articles/Article';
import articleList from  './components/Articles/ArticleStore.js'
import {Projects} from './components/Projects/Project'
import projectList from './components/Projects/ProjectStore'
import { Talks } from './components/Talks/Talk';
import talkList from './components/Talks/TalkStore'
import Link from 'next/link'



function App() {
  let count=0
  const onClickHandler = () => { 
    count++
    console.log(count)
  }
  return (
    
    <div className='App'>
      <Nav firstName="AISHA" lastName='AGARWAL' onClickHandler={onClickHandler} links={['About', 'Article', 'Projects','Talks']} btnlogo="/images/phone.svg" content="Lets's Talk"/>
      <About img={"/images/uifaces-popular-image.jpg"} introduction="I am a FullStack-Developer" name= "Aisha" />
      <Articles title= "Articles" articles={articleList.getArticles()}/>
      <Projects title= "Projects" projects={projectList.getProjects()}/>
      <Talks title= "Talks" talk={talkList.getTalks()}/>
    </div>
  );
}


export default App;
