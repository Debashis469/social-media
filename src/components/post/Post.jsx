import React from 'react';
import { Card, CardContent, Box, Avatar, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = () => {
  // Random image URL
  const randomImage = 'https://randomwordgenerator.com/img/picture-generator/54e6d34b4c53ab14f1dc8460962e33791c3ad6e04e507749772f79dd9f4bcc_640.jpg';

  return (
    <Card variant="outlined"  sx={{ mt: 2}}>
      <CardContent>
        {/* User avatar */}
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src="/path/to/avatar.jpg" />
          <Box ml={2}>User Name</Box>
          <Box flex={1} textAlign="right">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Random image */}
        <Box>
          <img src={randomImage} alt="Random" style={{ width: '100%', borderRadius: '4px' }} />
        </Box>

        {/* Thumbs up and heart icons */}
        <Box display="flex" alignItems="center" mt={2}>
          <IconButton>
            <ThumbUpIcon sx={{ color: '#2e81f4' }} />
          </IconButton>
          <IconButton>
            <FavoriteIcon sx={{ color: '#f02849' }} />
          </IconButton>
          <Typography variant="body2" ml={1}>34 people liked it</Typography>
        </Box>

        {/* Number of comments */}
        <Typography variant="body2" mt={1}>12 comments</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
