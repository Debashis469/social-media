import { Box } from '@mui/material'
import React from 'react'
import CreatePost from '../createpost/CreatePostBox'
import Post from '../post/Post'

import './feed.css'

const Feed = ({padding}) => {
  return (
    <Box flex={3.2} p={2}  pt={padding} className={'feed'} >
        <CreatePost />
        <Post />
        <Post />
        <Post />
        <Post />
    </Box>
  )
}

export default Feed