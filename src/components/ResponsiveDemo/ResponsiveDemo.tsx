import React from 'react';
import { Box, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import { getResponsiveColumns, getResponsiveFontSize } from '../../utils/responsive';

const ResponsiveDemo: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const getCurrentDevice = () => {
    if (isMobile) return 'Mobile';
    if (isTablet) return 'Tablet';
    if (isDesktop) return 'Desktop';
    return 'Unknown';
  };

  const demoItems = [
    { title: 'Responsive Grid', description: 'Automatically adjusts columns based on screen size' },
    { title: 'Flexible Typography', description: 'Font sizes scale appropriately across devices' },
    { title: 'Touch Optimized', description: 'Optimized interactions for mobile devices' },
    { title: 'Performance', description: 'Efficient CSS and optimized for all screen sizes' },
  ];

  return (
    <Box sx={{ py: 4, backgroundColor: '#f8f9fa' }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'center',
          mb: 2,
          color: '#1a472a',
          fontSize: getResponsiveFontSize(2),
        }}
      >
        Responsive Design Demo
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mb: 4,
          color: '#666',
          maxWidth: '600px',
          mx: 'auto',
          px: 2,
        }}
      >
        Current viewing device: <strong>{getCurrentDevice()}</strong>
        <br />
        This grid automatically adjusts based on your screen size.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: getResponsiveColumns({
            xs: 1,
            sm: 2,
            md: 2,
            lg: 4,
          }),
          gap: { xs: 2, md: 3 },
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, md: 3 },
        }}
      >
        {demoItems.map((item, index) => (
          <Card
            key={index}
            sx={{
              height: '100%',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: { xs: 'translateY(-2px)', md: 'translateY(-8px)' },
              },
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  mb: 1,
                  color: '#1a472a',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ResponsiveDemo;
