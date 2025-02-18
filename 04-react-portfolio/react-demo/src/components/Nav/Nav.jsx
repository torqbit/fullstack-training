import "./Nav.css"
export function Nav({firstname, lastname, onClickHanlder, count, links, btnlogo, content}){
  
  
    return( 
        <header>
          <nav className="head" onClick={onClickHanlder}>
            <FullName firstname={firstname} lastname={lastname} />
            <NavLinks links={links} />
            <Contact logo={btnlogo} content={content} />
          </nav>
        </header>
    )
  }

const FullName = ({firstname , lastname}) => (
  <h1><b>{firstname}</b>  {lastname}</h1>
)
const NavLinks = ({links}) => (
<ul className="links">
  {links.map(li => <li><a href="">{li}</a></li>)}
</ul>)

const Contact = ({logo, content}) => (
  <a href="/" className="icon">
    <img src= {logo} />
    <p>{content}</p>
  </a>
)