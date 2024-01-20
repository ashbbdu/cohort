import React from 'react'
import Card from '../components/Card'

const Profile = () => {
  const data = {
    image : "https://yt3.googleusercontent.com/vzccd947ZTCKG3FC9qa7geaB-O7euPpCQB0_PzRdzdKa-pPNvSkG686Luyq_TTUdV14W_es6ZeY=s176-c-k-c0x00ffffff-no-rj",
    name : "Riya Collins",
    notifications : 20,
    location : "London",
    followers : "80K",
    likes : "803K",
    photos : "1.4K"
  }
  return (
    <div className='profile'>
        <Card data={data} />  
    </div>
  )
}

export default Profile