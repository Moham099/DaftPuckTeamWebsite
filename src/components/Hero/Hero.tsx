import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(26, 71, 42, 0.8), rgba(26, 71, 42, 0.8)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 600\'%3E%3Crect fill=\'%23e8f5e8\' width=\'1200\' height=\'600\'/%3E%3Cpath fill=\'%23ffffff\' d=\'M100 100h1000v400H100z\' stroke=\'%23333\' stroke-width=\'4\'/%3E%3Ccircle cx=\'600\' cy=\'300\' r=\'100\' fill=\'none\' stroke=\'%23333\' stroke-width=\'4\'/%3E%3Cpath d=\'M500 200v200M700 200v200\' stroke=\'%23333\' stroke-width=\'2\'/%3E%3C/svg%3E")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
}));

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <SportsHockeyIcon sx={{ fontSize: 80, color: '#ffd700' }} />
          </Box>
          
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { 
                xs: '2rem', 
                sm: '2.5rem', 
                md: '3rem', 
                lg: '3.5rem', 
                xl: '4rem' 
              },
              fontWeight: 'bold',
              color: '#ffd700',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Daft Puck
          </Typography>
          
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { 
                xs: '1rem', 
                sm: '1.2rem', 
                md: '1.4rem', 
                lg: '1.6rem', 
                xl: '1.8rem' 
              },
              mb: 2,
              opacity: 0.9,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Local Beer League Hockey Team
          </Typography>
          
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: { 
                xs: '0.9rem', 
                sm: '1rem', 
                md: '1.05rem', 
                lg: '1.1rem' 
              },
              mb: 4,
              opacity: 0.8,
              maxWidth: '600px',
              mx: 'auto',
              px: { xs: 2, sm: 1, md: 0 },
              lineHeight: { xs: 1.5, md: 1.6 }
            }}
          >
            Where passion meets the ice. Join us for competitive games, 
            great camaraderie, and unforgettable moments on the rink.
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            onClick={scrollToAbout}
            sx={{
              backgroundColor: '#ffd700',
              color: '#1a472a',
              fontWeight: 'bold',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              px: { xs: 3, md: 4 },
              py: { xs: 1.2, md: 1.5 },
              borderRadius: '50px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#e6c200',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Learn More About Us
          </Button>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero;
