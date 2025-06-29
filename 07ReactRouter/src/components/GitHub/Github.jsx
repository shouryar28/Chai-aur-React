import React, { useEffect, useState } from 'react'

const Github = () => {
    let[data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/shouryar28')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center bg-gray-600 text-3xl text-white p-4 m-4'>
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="github profile picture" width={300} />
    </div>
  )
}

export default Github
