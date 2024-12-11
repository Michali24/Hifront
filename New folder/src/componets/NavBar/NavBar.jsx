// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import HomeIcon from '@mui/icons-material/Home';
// import { AppBar, Button, Toolbar, Typography } from '@mui/material';
// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {
//     return (
//         <AppBar position="fixed" style={{ backgroundColor: '#1a1a2e' }}>
//             <Toolbar>
//                 <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//                     <Typography variant="h6" component="div" sx={{ fontFamily: '"Great Vibes", cursive', display: 'flex', alignItems: 'center' }}>
//                         Hitechistim
//                     </Typography>
//                 </div>
//                 <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Button color="inherit">
//                         <HomeIcon />
//                         <span> Home </span>
//                     </Button>
//                 </Link>
//                 <Link to="/AboutUs" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Button color="inherit">About Us</Button>
//                 </Link>
//                 <Link to="/CateforyArticle" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Button color="inherit">Category Articles</Button>
//                 </Link>
//                 <Link to="/NewMeetup" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Button color="inherit">New Meetup</Button>
//                 </Link>
//                 <Link to="/GalleryCategoryList" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Button color="inherit">Gallery</Button>
//                 </Link>
//                 <Link to="/WhatsAppGroup" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Button color="inherit">WhatsApp Group</Button>
//                 </Link>
//                 <Link to="/RequestToAddArticleList" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Button color="inherit">RequestToAddArticleList</Button>
//                 </Link>
//                 <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Button color="inherit">
//                         <AccountCircleIcon />
//                         <span>Login</span>
//                     </Button>
//                 </Link>
//                 <Link to="/SignUp" style={{ textDecoration: 'none', color: 'inherit' }}>
//                     <Button color="inherit">
//                         <AccountCircleIcon />
//                         <span>Join Now</span>
//                     </Button>
//                 </Link>
//             </Toolbar>
//         </AppBar>
//     );
// }

// export default NavBar;

//קטד נוסף הבודק מנהל
//9-12-24
//זה טוב אבל עם התחברתי מLOGIN 
//להיות מנהל אז אני צריכה בשביל זה לעשות ריפרוש על העמוד..

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // בדיקה אם המשתמש הוא מנהל
        const adminStatus = localStorage.getItem('isAdmin');
        if (adminStatus === 'true') {
            setIsAdmin(true);
        }
    }, []);

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
                <Link to="/AddGalleryCategory" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">AddGalleryCategory</Button>
                </Link>
                <Link to="/WhatsAppGroup" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit">WhatsApp Group</Button>
                </Link>
                {/* הצגת הכפתור רק אם המשתמש הוא מנהל */}
                {isAdmin && (
                    <Link to="/RequestToAddArticleList" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color="inherit">RequestToAddArticleList</Button>
                    </Link>
                )}
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



