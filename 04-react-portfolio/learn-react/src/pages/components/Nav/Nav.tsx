import styles from '@/styles/Nav.module.css'
import {FC} from "react";

type NavProps ={
  firstName: string;
  lastName: string;
  //onClickHandler: () => void;
  links: string[];
  btnlogo : string;
  content: string;
}

export const Nav : FC<NavProps> = ({firstName, lastName , links, btnlogo, content}) => {
  return <nav className={`${styles.head} ${styles.nav}`}>
            <FullName firstname={firstName} lastname={lastName} />
            <NavLinks links={links} />
            <Contact logo={btnlogo} content={content} />
         </nav>
}
const FullName :FC<{firstname:string, lastname:string}> = ({firstname , lastname}) => (
  <h1><b>{firstname}</b>  {lastname}</h1>
)
const NavLinks: FC<{links:string[]}> = ({links}) => (
<ul className={styles.links}>
  {links.map(li => <li><a href="">{li}</a></li>)}
</ul>)

const Contact: FC<{logo:string, content:string}> = ({logo, content}) => (
  <a href="/" className={styles.icon}>
    <img src= {logo} />
    <p>{content}</p>
  </a>
)