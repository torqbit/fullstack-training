import { FC, ReactElement, useState } from "react"
import { AppContext } from "./appContext"

const AppProvider: FC<{children: ReactElement}>=({children})=>{

    const [userdetail, setuserdetail] = useState()

    return <AppContext.Provider value={{name:'Aisha', contact: 984367952, profileImg:'', description:'I am learning full-stack', title:'learning',talk:[],project:[] ,article:[]}}>
            {children}
           </AppContext.Provider>
}

export default AppProvider;