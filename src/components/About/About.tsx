import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f8f9fa',
  
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(6, 0),
  },
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  borderRadius: '12px',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
}));

const About: React.FC = () => {
  const features = [
    {
      icon: <GroupIcon sx={{ fontSize: 60, color: '#1a472a', mb: 2 }} />,
      title: 'Team Spirit',
      description: 'We believe in the power of teamwork both on and off the ice. Our players support each other through victories and defeats, creating lasting friendships.'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 60, color: '#ffd700', mb: 2 }} />,
      title: 'Competitive Excellence',
      description: 'While we play for fun, we take our game seriously. We strive for improvement and celebrate our achievements together as a team.'
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 60, color: '#ff6b35', mb: 2 }} />,
      title: 'Passion for Hockey',
      description: 'Hockey isn\'t just a game for us - it\'s a way of life. We live and breathe the sport, sharing our love for the game with every shift.'
    }
  ];

  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            color: '#1a472a',
            fontWeight: 'bold',
            fontSize: { 
              xs: '1.8rem', 
              sm: '2.2rem', 
              md: '2.5rem', 
              lg: '2.8rem' 
            }
          }}
        >
          About Daft Puck
        </Typography>
        
        <Typography
          variant="h6"
          component="p"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#666',
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 2, md: 0 },
            fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
            lineHeight: { xs: 1.6, md: 1.7 }
          }}
        >
          Founded in 2018, Daft Puck has grown from a group of hockey enthusiasts 
          to a competitive beer league team that embodies the true spirit of the game. 
          We welcome players of all skill levels who share our passion for hockey and good times.
        </Typography>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            md: 'repeat(2, 1fr)', 
            lg: 'repeat(3, 1fr)' 
          }, 
          gap: { xs: 3, md: 4 }
        }}>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 2,
                    color: '#1a472a',
                    fontWeight: 'bold',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </FeatureCard>
          ))}
        </Box>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              mb: 3,
              color: '#1a472a',
              fontWeight: 'bold',
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            To provide a welcoming and competitive environment where hockey players 
            can improve their skills, build lasting friendships, and enjoy the 
            greatest game on earth. We're more than just a team - we're a family.
          </Typography>
        </Box>
      </Container>
    </AboutSection>
  );
};

export default About;
