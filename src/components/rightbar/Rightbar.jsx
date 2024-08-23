import { Box, Typography, Avatar, Grid } from '@mui/material';
import React from 'react';
import birthdayImage from '../../assets/birthday.png';
import adImage from '../../assets/ad.png';
import './rightbar.css';

const friends = [
  { name: 'Jack', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'John Spillman', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=4' },
  { name: 'Lucy', avatar: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Tom', avatar: 'https://i.pravatar.cc/150?img=6' },
];

const Rightbar = ({ padding , variant }) => {

  const HomeRightBar = () => {
    return (
      <>
        <Box className='birthday'>
          <img src={birthdayImage} alt="birthday gift" className='birthdayImage' />
          <Typography variant="body1" color="initial">
            <b>Michel</b> and <b>3 other friends</b> have their birthday today
          </Typography>
        </Box>
        <Box className='ad'>
          <img src={adImage} alt="ad" className='adImage' />
        </Box>
        <Box className='onlineFriends'>
          <Typography variant="h6" color="initial" className='onlineTitle'>
            <b>Online Friends</b>
          </Typography>
          {friends.map((friend) => (
            <Box key={friend.name} className='friend'>
              <Box className='avatarContainer'>
                <Avatar src={friend.avatar} alt={friend.name} className='avatar' />
                <Box className='onlineDot'></Box>
              </Box>
              <Typography variant="body1" color="initial">
                {friend.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <Box className='profileInfo'>
          <Typography variant="h6" color="initial" className='profileTitle'>
            <b>User Information</b>
          </Typography>
          <Typography variant="body1" color="initial" className='profileDetail'>
            <b>City:</b> New York
          </Typography>
          <Typography variant="body1" color="initial" className='profileDetail'>
            <b>From:</b> Los Angeles
          </Typography>
          <Typography variant="body1" color="initial" className='profileDetail'>
            <b>Relationship:</b> Single
          </Typography>
        </Box>
        <Box className='profileFriends'>
          <Typography variant="h6" color="initial" className='profileTitle'>
            <b>User Friends</b>
          </Typography>
          <Grid container spacing={2}>
            {friends.map((friend) => (
              <Grid item xs={4} key={friend.name}>
                <Box textAlign="center">
                  <Avatar src={friend.avatar} alt={friend.name} className='profileFriendAvatar' />
                  <Typography variant="body2" color="initial">{friend.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    )
  }

  return (
    <Box flex={2} pt={padding} className="rightbarContainer">
      {variant === 'home' ? <HomeRightBar /> : <ProfileRightBar /> }
    </Box>
  );
};

export default Rightbar;

