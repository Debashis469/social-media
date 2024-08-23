import React from 'react';
import { Box, Avatar, IconButton, TextField, Divider, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TagIcon from '@mui/icons-material/Tag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';

const CreatePostBox = () => {
  return (
    <Box
      bgcolor="white"
      borderRadius={3}
      boxShadow={3}
      p={2}
      display="flex"
      flexDirection="column"
    >
      {/* User avatar */}
      <Box display="flex" alignItems="center">
        <Avatar src="/path/to/avatar.jpg" />
        <Box ml={2}>User Name</Box>
      </Box>
      
      {/* Text input area */}
      <TextField
        multiline
        rows={2}
        placeholder="What's in your mind?"
        variant="standard"
        fullWidth
        InputProps={{ disableUnderline: true }}
        mt={2}
      />
      
      {/* Divider */}
      <Divider sx={{ my: 2 }} />
      
      {/* Options with icons and text */}
      <Box display="flex" justifyContent={'flex-start'} gap={2}>
        <Box textAlign="center">
          <IconButton>
            <AddPhotoAlternateIcon sx={{ fontSize: 30, color: 'red' }} />
          </IconButton>
          <Typography variant="body2">Photo</Typography>
        </Box>
        <Box textAlign="center">
          <IconButton>
            <VideoLibraryIcon sx={{ fontSize: 30, color: 'red' }} />
          </IconButton>
          <Typography variant="body2">Video</Typography>
        </Box>
        <Box textAlign="center">
          <IconButton>
            <TagIcon sx={{ fontSize: 30, color: 'blue' }} />
          </IconButton>
          <Typography variant="body2">Tag</Typography>
        </Box>
        <Box textAlign="center">
          <IconButton>
            <LocationOnIcon sx={{ fontSize: 30, color: 'green' }} />
          </IconButton>
          <Typography variant="body2">Location</Typography>
        </Box>
        <Box textAlign="center">
          <IconButton>
            <InsertEmoticonIcon sx={{ fontSize: 30, color: 'gold' }} />
          </IconButton>
          <Typography variant="body2">Feeling</Typography>
        </Box>
      </Box>
      
      {/* Post button */}
      <Box mt={2} display="flex" justifyContent="flex-end">
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CreatePostBox;
