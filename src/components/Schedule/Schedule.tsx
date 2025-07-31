import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';

const ScheduleSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#1a472a',
  color: 'white',
  
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(6, 0),
  },
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const GameCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
}));

interface Game {
  date: string;
  time: string;
  opponent: string;
  location: string;
  type: 'home' | 'away';
  result?: 'win' | 'loss' | 'tie';
  score?: string;
}

const Schedule: React.FC = () => {
  const games: Game[] = [
    {
      date: 'Aug 5, 2025',
      time: '7:00 PM',
      opponent: 'Ice Breakers',
      location: 'Main Street Rink',
      type: 'home',
      result: 'win',
      score: '4-2'
    },
    {
      date: 'Aug 12, 2025',
      time: '8:30 PM',
      opponent: 'Frozen Assets',
      location: 'Northside Arena',
      type: 'away',
      result: 'loss',
      score: '2-3'
    },
    {
      date: 'Aug 19, 2025',
      time: '7:30 PM',
      opponent: 'Slap Shot Squad',
      location: 'Main Street Rink',
      type: 'home'
    },
    {
      date: 'Aug 26, 2025',
      time: '9:00 PM',
      opponent: 'Puck Dynasty',
      location: 'Eastside Ice Center',
      type: 'away'
    },
    {
      date: 'Sep 2, 2025',
      time: '7:00 PM',
      opponent: 'Stick Handlers',
      location: 'Main Street Rink',
      type: 'home'
    }
  ];

  const getResultColor = (result?: string) => {
    switch (result) {
      case 'win': return '#4caf50';
      case 'loss': return '#f44336';
      case 'tie': return '#ff9800';
      default: return '#ffd700';
    }
  };

  const getResultText = (result?: string) => {
    switch (result) {
      case 'win': return 'WIN';
      case 'loss': return 'LOSS';
      case 'tie': return 'TIE';
      default: return 'UPCOMING';
    }
  };

  return (
    <ScheduleSection id="schedule">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            color: '#ffd700',
            fontWeight: 'bold',
          }}
        >
          Game Schedule
        </Typography>
        
        <Typography
          variant="h6"
          component="p"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#ccc',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Check out our upcoming games and recent results. Come cheer us on!
        </Typography>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {games.map((game, index) => (
            <GameCard key={index}>
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  mb: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 2, sm: 0 }
                }}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarMonthIcon sx={{ mr: 1, color: '#1a472a' }} />
                      <Typography variant="h6" sx={{ color: '#1a472a', fontWeight: 'bold' }}>
                        {game.date} at {game.time}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <SportsHockeyIcon sx={{ mr: 1, color: '#666' }} />
                      <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                        vs {game.opponent}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOnIcon sx={{ mr: 1, color: '#666' }} />
                      <Typography variant="body2" color="text.secondary">
                        {game.location}
                      </Typography>
                      <Chip 
                        label={game.type.toUpperCase()} 
                        size="small" 
                        sx={{ 
                          ml: 2, 
                          backgroundColor: game.type === 'home' ? '#1a472a' : '#666',
                          color: 'white',
                          fontWeight: 'bold'
                        }} 
                      />
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    textAlign: { xs: 'center', sm: 'right' },
                    alignSelf: { xs: 'center', sm: 'flex-start' }
                  }}>
                    <Chip
                      label={getResultText(game.result)}
                      sx={{
                        backgroundColor: getResultColor(game.result),
                        color: 'white',
                        fontWeight: 'bold',
                        mb: game.score ? 1 : 0
                      }}
                    />
                    {game.score && (
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#1a472a', 
                          fontWeight: 'bold',
                          mt: 1
                        }}
                      >
                        {game.score}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </GameCard>
          ))}
        </Box>

        <Divider sx={{ my: 4, backgroundColor: '#ffd700' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#ffd700', mb: 2 }}>
            Home Venue
          </Typography>
          <Typography variant="body1" sx={{ color: '#ccc' }}>
            Main Street Rink<br />
            123 Main Street, Hockey Town<br />
            All home games start at 7:00 PM unless otherwise noted
          </Typography>
        </Box>
      </Container>
    </ScheduleSection>
  );
};

export default Schedule;
