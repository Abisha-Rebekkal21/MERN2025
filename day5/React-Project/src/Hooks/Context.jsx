import React, { createContext} from 'react'

const Context=createContext();
export const UserContext = ({children}) =>{
    const user = {name:"Abisha", phno:"1234567890"}
    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}

export default Context