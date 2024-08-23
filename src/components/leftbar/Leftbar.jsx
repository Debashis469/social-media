import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Divider, Typography } from '@mui/material';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import './leftbar.css'

const friends = [
  { name: 'John Doe', avatar: '/path/to/avatar1.jpg' },
  { name: 'Jane Smith', avatar: '/path/to/avatar2.jpg' },
  { name: 'Alice Johnson', avatar: '/path/to/avatar3.jpg' },
  { name: 'Bob Brown', avatar: '/path/to/avatar4.jpg' },
];

const Leftbar = () => {
  return (
    <Box flex={1.2} pl={3} pr={4} className={'leftbar'} >
      <List>
        {[
          { text: 'Feed', icon: <RssFeedIcon /> },
          { text: 'Chats', icon: <ChatIcon /> },
          { text: 'Videos', icon: <VideoLibraryIcon /> },
          { text: 'Groups', icon: <GroupIcon /> },
          { text: 'Bookmarks', icon: <BookmarkIcon /> },
          { text: 'Questions', icon: <HelpIcon /> },
          { text: 'Jobs', icon: <WorkIcon /> },
          { text: 'Events', icon: <EventIcon /> },
          { text: 'Courses', icon: <SchoolIcon /> },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Show More" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Friends
      </Typography>
      <List className='sidebarFriendList'>
        {friends.map((friend, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Avatar src={friend.avatar} />
            </ListItemIcon>
            <ListItemText primary={friend.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Leftbar;
