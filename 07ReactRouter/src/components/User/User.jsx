import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const{userid} = useParams()
  return (
    <div className='text-center text-3xl rounded-2xl border-x-lime-400 bg-emerald-500 shadow-inner p-4'>
     User : {userid} 
    </div>
  )
}

export default User
