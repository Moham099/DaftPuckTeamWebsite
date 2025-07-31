import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a472a',
  color: 'white',
  padding: theme.spacing(6, 0, 3, 0),
}));

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FacebookIcon />, label: 'Facebook', url: '#' },
    { icon: <TwitterIcon />, label: 'Twitter', url: '#' },
    { icon: <InstagramIcon />, label: 'Instagram', url: '#' },
    { icon: <EmailIcon />, label: 'Email', url: 'mailto:info@daftpuck.com' },
  ];

  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          mb: 4,
          gap: 4
        }}>
          {/* Logo and Team Info */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <SportsHockeyIcon sx={{ mr: 1, color: '#ffd700', fontSize: 30 }} />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Roboto Slab, serif',
                  fontWeight: 'bold',
                  color: '#ffd700',
                }}
              >
                Daft Puck
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 1, opacity: 0.9 }}>
              Local Beer League Hockey Team
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: '300px' }}>
              Where passion meets the ice. Join us for competitive games, 
              great camaraderie, and unforgettable moments.
            </Typography>
          </Box>

          {/* Contact Info */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#ffd700', fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
              Email: info@daftpuck.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
              Phone: (555) 123-PUCK
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Home Rink: Main Street Rink
            </Typography>
          </Box>

          {/* Social Media */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#ffd700', fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: '#ffd700',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: '#ffd700', opacity: 0.3, mb: 3 }} />

        {/* Quick Links */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: { xs: 2, md: 4 },
          mb: 3
        }}>
          {['Home', 'About', 'Schedule', 'Roster', 'Contact'].map((link) => (
            <Typography
              key={link}
              variant="body2"
              sx={{
                cursor: 'pointer',
                opacity: 0.8,
                '&:hover': {
                  color: '#ffd700',
                  opacity: 1,
                },
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                const element = document.getElementById(link.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>

        <Divider sx={{ backgroundColor: '#ffd700', opacity: 0.3, mb: 3 }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} Daft Puck Hockey Team. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
            Built with ❤️ for the love of hockey
          </Typography>
        </Box>
      </Container>
    </FooterSection>
  );
};

export default Footer;
