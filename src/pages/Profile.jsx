import React from 'react'
import { Box } from '@mui/material'
import Topbar from '../components/topbar/Topbar'
import Leftbar from '../components/leftbar/Leftbar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'

import './profile.css'

import coverPic from '../assets/cover.jpg'
import profilePic from '../assets/profile.jpg'

const Profile = () => {
  return (
    <>
      <Topbar />
      <Box display={'flex'} className={'profile'} gap={2} justifyContent={'space-between'} >
        <Box flex={1.5} className={'profileLeft'}>
           <Leftbar />
        </Box>
        <Box flex={6} className='profileRight'>
            <Box className='profileRightTop'>
                <img src={coverPic} className='coverpic' alt="" />
                <img src={profilePic} className='profilepic' alt="" />
            </Box>
            <Box className='profileinfo'>
                <h2> <b>Lionel Messi</b> </h2>
            </Box>
           <Box display={'flex'} className='profileRightBottom'>
                <Feed padding={0} />
                <Rightbar padding={0}/>
           </Box>
        </Box>
      </Box>
    </>
  )
}

export default Profile