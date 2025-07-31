import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const RosterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f8f9fa',
}));

const PlayerCard = styled(Card)(({ theme }) => ({
  height: '300px',
  textAlign: 'center',
  borderRadius: '12px',
  cursor: 'pointer',
  perspective: '1000px',
  transition: 'transform 0.2s ease',
  
  '&:hover': {
    transform: 'translateY(-4px)',
  },
  
  [theme.breakpoints.down('md')]: {
    height: '280px',
  },
}));

const CardInner = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  
  '&.flipped': {
    transform: 'rotateY(180deg)',
  },
});

const CardFace = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease',
});

const CardBack = styled(CardFace)({
  transform: 'rotateY(180deg)',
  backgroundColor: '#2c2c2c',
  color: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px',
});

interface Player {
  name: string;
  number: number;
  position: string;
  hometown: string;
  yearsWithTeam: number;
  isCapture?: boolean;
  biography: string;
}

const Roster: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const players: Player[] = [
    { 
      name: 'Mike Johnson', 
      number: 91, 
      position: 'Center', 
      hometown: 'Hockey Town', 
      yearsWithTeam: 4, 
      isCapture: true,
      biography: 'Team captain with exceptional leadership skills. Mike started playing hockey at age 5 and has been with Daft Puck since its founding. Known for his clutch plays and ability to inspire teammates during tough games.'
    },
    { 
      name: 'Sarah Williams', 
      number: 17, 
      position: 'Right Wing', 
      hometown: 'Ice City', 
      yearsWithTeam: 3,
      biography: 'Lightning-fast right winger with a deadly accurate shot. Sarah played collegiate hockey before joining Daft Puck. She holds the team record for most goals in a single season and loves mentoring new players.'
    },
    { 
      name: 'Dave Thompson', 
      number: 8, 
      position: 'Left Wing', 
      hometown: 'Puck Valley', 
      yearsWithTeam: 2,
      biography: 'Versatile left winger known for his incredible work ethic and team spirit. Dave brings energy to every practice and game. Off the ice, he coaches youth hockey and works as a firefighter in his hometown.'
    },
    { 
      name: 'Alex Rodriguez', 
      number: 22, 
      position: 'Defense', 
      hometown: 'Rink Ridge', 
      yearsWithTeam: 5,
      biography: 'Rock-solid defenseman who never backs down from a challenge. Alex is the backbone of our defense, known for his powerful slap shot and ability to read opposing plays. He\'s studying engineering when not on the ice.'
    },
    { 
      name: 'Emily Chen', 
      number: 5, 
      position: 'Defense', 
      hometown: 'Stick Station', 
      yearsWithTeam: 1,
      biography: 'Newest addition to the team but already making a huge impact. Emily brings fresh energy and innovative defensive strategies. She played semi-professional hockey in Canada before joining Daft Puck.'
    },
    { 
      name: 'Ryan O\'Connor', 
      number: 30, 
      position: 'Goalie', 
      hometown: 'Net Neighborhood', 
      yearsWithTeam: 3,
      biography: 'Fearless goaltender with cat-like reflexes. Ryan is known for his calm demeanor under pressure and his ability to make spectacular saves. He practices meditation to stay focused during intense games.'
    },
    { 
      name: 'Jessica Martinez', 
      number: 12, 
      position: 'Left Wing', 
      hometown: 'Goal Grove', 
      yearsWithTeam: 2,
      biography: 'Dynamic left winger with excellent stick-handling skills. Jessica brings creativity to every play and has a knack for setting up perfect assists. She\'s working on her master\'s degree in sports psychology.'
    },
    { 
      name: 'Tom Wilson', 
      number: 44, 
      position: 'Defense', 
      hometown: 'Check Heights', 
      yearsWithTeam: 4,
      biography: 'Veteran defenseman known for his strategic mind and powerful body checks. Tom is a student of the game who helps develop defensive plays. Outside hockey, he runs a successful outdoor equipment business.'
    },
    { 
      name: 'Lisa Park', 
      number: 7, 
      position: 'Right Wing', 
      hometown: 'Skate Street', 
      yearsWithTeam: 1,
      biography: 'Speedy right winger with exceptional agility and puck control. Lisa joined the team last year and quickly became a fan favorite. She\'s known for her positive attitude and incredible work-life balance as a nurse.'
    },
    { 
      name: 'Chris Davis', 
      number: 19, 
      position: 'Center', 
      hometown: 'Pass Place', 
      yearsWithTeam: 3,
      biography: 'Playmaking center with vision and precision passing. Chris has an uncanny ability to find open teammates and create scoring opportunities. He\'s also the team\'s unofficial chef and organizes team dinners.'
    },
    { 
      name: 'Ashley Brown', 
      number: 21, 
      position: 'Left Wing', 
      hometown: 'Shot Square', 
      yearsWithTeam: 2,
      biography: 'Tenacious left winger who never gives up on a play. Ashley is known for her defensive awareness and ability to turn defense into offense quickly. She volunteers at local animal shelters in her spare time.'
    },
    { 
      name: 'Kevin Lee', 
      number: 35, 
      position: 'Goalie', 
      hometown: 'Save City', 
      yearsWithTeam: 1,
      biography: 'Backup goaltender with lightning-quick reflexes and a great sense of humor. Kevin keeps the team loose with his jokes while being ready to step up when needed. He\'s studying computer science and loves gaming.'
    },
  ];

  const getPositionColor = (position: string) => {
    switch (position) {
      case 'Center': return '#2c2c2c';
      case 'Left Wing':
      case 'Right Wing': return '#ff8f00';
      case 'Defense': return '#757575';
      case 'Goalie': return '#424242';
      default: return '#666';
    }
  };

  const generateAvatar = (name: string, number: number) => {
    const initials = name.split(' ').map(n => n[0]).join('');
    return (
      <Avatar
        sx={{
          width: 80,
          height: 80,
          backgroundColor: '#2c2c2c',
          color: '#ff8f00',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          mx: 'auto',
          mb: 2,
        }}
      >
        {initials}
      </Avatar>
    );
  };

  return (
    <RosterSection id="roster">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            color: '#2c2c2c',
            fontWeight: 'bold',
          }}
        >
          Team Roster
        </Typography>
        
        <Typography
          variant="h6"
          component="p"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#666',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Meet the talented individuals who make up the Daft Puck family. 
          Each player brings their unique skills and passion to the ice.
        </Typography>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(3, 1fr)', 
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(4, 1fr)'
          }, 
          gap: { xs: 2, sm: 3, md: 3, lg: 3 }
        }}>
          {players.map((player, index) => (
            <PlayerCard key={index} onClick={() => handleCardClick(index)}>
              <CardInner className={`card-inner ${flippedCards.has(index) ? 'flipped' : ''}`}>
                {/* Front of card */}
                <CardFace>
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    {generateAvatar(player.name, player.number)}
                    
                    <Box sx={{ position: 'relative', mb: 2 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#2c2c2c',
                          mb: 0.5,
                        }}
                      >
                        {player.name}
                      </Typography>
                      {player.isCapture && (
                        <Chip
                          label="Captain"
                          size="small"
                          sx={{
                            backgroundColor: '#ff8f00',
                            color: '#2c2c2c',
                            fontWeight: 'bold',
                            fontSize: '0.7rem'
                          }}
                        />
                      )}
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: '#2c2c2c',
                          fontWeight: 'bold',
                          mb: 1
                        }}
                      >
                        #{player.number}
                      </Typography>
                      
                      <Chip
                        label={player.position}
                        sx={{
                          backgroundColor: getPositionColor(player.position),
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      />
                    </Box>

                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        <strong>Hometown:</strong> {player.hometown}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Years with team:</strong> {player.yearsWithTeam}
                      </Typography>
                    </Box>

                    <Typography 
                      variant="caption" 
                      sx={{ 
                        position: 'absolute', 
                        bottom: 8, 
                        left: '50%', 
                        transform: 'translateX(-50%)',
                        color: '#ff8f00',
                        fontWeight: 'bold'
                      }}
                    >
                      Click to flip
                    </Typography>
                  </CardContent>
                </CardFace>

                {/* Back of card */}
                <CardBack>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#ff8f00',
                      fontWeight: 'bold',
                      mb: 2,
                    }}
                  >
                    {player.name} #{player.number}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.6,
                      textAlign: 'center',
                      mb: 2,
                    }}
                  >
                    {player.biography}
                  </Typography>

                  <Typography 
                    variant="caption" 
                    sx={{ 
                      position: 'absolute', 
                      bottom: 8, 
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      color: '#ff8f00',
                      fontWeight: 'bold'
                    }}
                  >
                    Click to flip back
                  </Typography>
                </CardBack>
              </CardInner>
            </PlayerCard>
          ))}
        </Box>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              mb: 2,
              color: '#2c2c2c',
              fontWeight: 'bold',
            }}
          >
            Join Our Team!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '500px',
              mx: 'auto',
              color: '#555',
              lineHeight: 1.6,
            }}
          >
            Looking for new players to join our roster! Whether you're a seasoned veteran 
            or new to the game, we welcome anyone with a passion for hockey and team spirit.
          </Typography>
        </Box>
      </Container>
    </RosterSection>
  );
};

export default Roster;
