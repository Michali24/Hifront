import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <AppBar position="fixed" style={{ backgroundColor: '#1a1a2e' }}>
            <Toolbar>
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Typography variant="h6" component="div" sx={{ fontFamily: '"Great Vibes", cursive', display: 'flex', alignItems: 'center' }}>
                        Hitechistim
                    </Typography>
                </div>
                <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">
                        <HomeIcon />
                        <span> Home </span>
                    </Button>
                </Link>
                <Link to="/AboutUs" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">About Us</Button>
                </Link>
                <Link to="/CateforyArticle" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">Category Articles</Button>
                </Link>
                <Link to="/NewMeetup" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">New Meetup</Button>
                </Link>
                <Link to="/GalleryCategoryList" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">Gallery</Button>
                </Link>
                <Link to="/WhatsAppGroup" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">WhatsApp Group</Button>
                </Link>
                <Link to="/RequestToAddArticleList" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">RequestToAddArticleList</Button>
                </Link>
                <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">
                        <AccountCircleIcon />
                        <span>Login</span>
                    </Button>
                </Link>
                <Link to="/SignUp" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">
                        <AccountCircleIcon />
                        <span>Join Now</span>
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;

