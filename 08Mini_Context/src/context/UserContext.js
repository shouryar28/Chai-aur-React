// Context API ek global variable ki tarah hota hai jisse hum directly koi bhi jsx file mein use kar sakte hai unlike props jhaa hum har value ko recieve karte the main file se eg: 03TailwindProps

// React ke andar pehle context API nhi aata tha lekin yee bhut useful feature thaa isiliye baad react nee isse apne library mein add kar liyaa

import React from "react"; // importing react for using createContext.

const UserContext = React.createContext() // yha hum ek UserContext naam ka variable bnaa rhee uske andar save kar rhee createContext naam ka method jiske andar context API ke saare features rehnee waale hai  

export default UserContext; // and then we are exporting that variable to use in other files. 

// Every context give us a provider means context hume ek variable hi too provide kar rha hai

// isko hum wrapper ki tarah use karenge

{/* <UserContext>
    
<Login/>
<Card />
<Data />

<UserContext/> */}  // Ab in saare elements ko create context kaa access mil jaayegaa