import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import './topbar.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

function Topbar() {
  return (
    <AppBar  className="topbar">
      <Toolbar className="toolbar">
        <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
           <Typography variant="h4" noWrap component="div" className="logo">
             SocialSync
           </Typography>
        </Link>
        
        <div className="search-container">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for people, posts or videos…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ width: '360px' }}
            />
          </Search>
        </div>
        <div className="pages">
          <Typography variant="h6" noWrap component="div" className="home">
            Homepage
          </Typography>
          <Typography variant="h6" noWrap component="div" className="timeline">
            Timeline
          </Typography>
        </div>
        <div className="icons">
          <Badge badgeContent={3} color="error">
            <PersonIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <ChatIcon />
          </Badge>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
