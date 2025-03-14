import styles from '@/styles/portfolioEditor/Edit.module.css';
import Portfolio from "@/components/useContext/Portfolio";
import PortfolioEditor from "@/components/PortfolioEditor/Portfolio-Editor";
import AppProvider from "@/components/useContext/AppProvider";
import React from 'react'

const edit = () => {
  return(
    <AppProvider>
        <div className={styles.edit}>
            <div className={styles.portfolio}>
                <Portfolio />
            </div>
            <div className={styles.portfolioEditor}>
                <PortfolioEditor />
            </div>
        </div>
    </AppProvider>
   );
};
      

export default edit
