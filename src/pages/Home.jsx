import React from 'react'
import { Stack } from '@mui/material'
import Topbar from '../components/topbar/Topbar'
import Leftbar from '../components/leftbar/Leftbar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'
import './home.css'

const Home = () => {
  return (
    <>
      <Topbar />
      <Stack direction={'row'} spacing={'2'} justifyContent={'space-between'}>
        <Leftbar />
        <Feed padding={10}/>
        <Rightbar padding={10}  variant={'home'} />
      </Stack>
    </>
  )
}

export default Home