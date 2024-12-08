import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, IconButton, Link } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const FooterStyle = styled(Box)(({ theme }) => ({
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '8px 0',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: '1100'
  }));

export default function Footer() {
    return (
        <>
            <FooterStyle />
            <Box display="flex" justifyContent="center" alignItems="center" position="fixed" bottom={0} left={0} width="100%" bgcolor="#1a1a2e" color="white" paddingTop={1} paddingBottom={1} zIndex={1100}>
                <Box>© 2024 Pluralsight. All rights reserved.</Box>
                <IconButton component="a" href="mailto:example@example.com" color="inherit">
                    <EmailIcon />
                </IconButton>
                <IconButton component="a" href="https://wa.me/1234567890" target="_blank" color="inherit">
                    <WhatsAppIcon />
                </IconButton>
                <IconButton component="a" href="https://instagram.com/yourprofile" target="_blank" color="inherit">
                    <InstagramIcon />
                </IconButton>
                <Link href="/contact" color="inherit" ml={2}>צור קשר</Link>
            </Box>
        </>
    )
}

