// jsx file bnane ka jarurat isiliye pdd rhaa kyuki jo hum fragments le rhee the , top level par usko rakhna paregaa,  tabhi too aapke saare variables mein access ho paayegaa

import React from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    // API wageraah jo bhi call karnaa hai yhaa pe call karlo then wo UserContext ke value waale part mein chlaa jaayega .

    // value kaa kaam hai objects lenaa , wo objects jo ki saare components use kar skeee
 return(
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
 )
}

export default UserContextProvider

// Children : ye ek generic naam hai jiska matlb hota hai jo aa rhaa usko bss aage pass on kardo.     
