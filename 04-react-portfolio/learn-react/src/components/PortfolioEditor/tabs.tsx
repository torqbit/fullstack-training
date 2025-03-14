import { ReactElement } from "react";
import { useState , useCallback } from "react";
import {FC} from "react";
import styles from "@/styles/portfolioEditor/tab.module.css"

export type ITabProps={
    icon: string;
    title: string;
    form : ReactElement;
}

export const Tab : FC<{items : ITabProps[]}> =({items}) =>{
    const [tabIndex,setTabIndex] = useState(0);

    const handleTabClick = (tabIndex: number) => {
        setTabIndex(tabIndex);
      };

    return(
        <div className={styles.editor}>
            <div className={styles.tab__button}>
                {items.map((tab, index)=>(
                    <div key={index} onClick={()=> handleTabClick(index)} className={`${styles.tab} ${tabIndex === index ? styles.active : styles.inactive}` }>
                        <img src={tab.icon}/>
                        <p>{tab.title}</p>
                    </div>
                ))}
                <img src="images/icons8-close.svg"/>
            </div>
            <div className={styles.tabcontent}>
                {items[tabIndex].form}
            </div>
        </div>
    )
}