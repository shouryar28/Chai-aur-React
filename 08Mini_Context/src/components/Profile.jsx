// yhaa data kaise access hota hai yhaa wo dekh lengee
import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'


function Profile() {
    const {user} = useContext(UserContext);
     if(!user){
        return (
  <div className="flex justify-center items-center bg-gray-100">
    <div className="bg-red-600 text-white text-center px-6 py-4 rounded-lg shadow-lg w-full ">
      <h2 className="text-2xl font-semibold">🔒 Please Login</h2>
      <p className="mt-2 text-sm opacity-90">You need to be logged in to access this page.</p>
    </div>
  </div>
);
     }
     return (
        <div className="flex justify-center items-center bg-gray-100">
    <div className="bg-red-600 text-white text-center px-6 py-4 rounded-lg shadow-lg w-full ">
      <h2 className="text-2xl font-semibold">Welcome {user.username}</h2>
      <p className="mt-2  opacity-90 text-xl"> ✅ You are successfully logged in</p>
    </div>
  </div>
     )
}

export default Profile
 