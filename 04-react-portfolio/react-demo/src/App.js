import './App.css';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Articles } from './components/Article';
import { articleList } from './components/ArticleStore.mjs';

function App() {
  let count=0
  const onClickHandler = () => { 
    count++
    console.log(count)
  }
  return (
    <div className="App">
      <Nav firstname="AISHA" lastname='AGARWAL' onClickHanlder={onClickHandler} count={count} links={['About', 'Article', 'Projects','Talks']} navlogo="/images/phone.svg" content="Lets's Talk"/>
      <About img={"/images/uifaces-popular-image.jpg"} introduction="I am a FullStack-Developer" name= "Aisha" />
      <Articles title= "Article" article={articleList}/>
    </div>
  );
}


export default App;
