import { Nav } from '../components/Portfolio/Nav/Nav';
import { About } from '../components/Portfolio/About/About';
import { Articles } from '../components/Portfolio/Articles/Article';
import articleList from  '../components/Portfolio/Articles/ArticleStore.js'
import {Projects} from '../components/Portfolio/Projects/Project'
import projectList from '../components/Portfolio/Projects/ProjectStore'
import { Talks } from '../components/Portfolio/Talks/Talk';
import talkList from '../components/Portfolio/Talks/TalkStore';
import { useContext } from 'react';
import { AppContext } from './components/AppContext';


function App() {
  let count=0
  const onClickHandler = () => { 
    count++
    console.log(count)
  }

  const { user, userArticle}  = useContext(AppContext)
  return (
    
    <>
      {user && (<About {...user} />)}
      {userArticle && (<Articles {...userArticle} />)}

    </>
    
  );
}


export default App;
