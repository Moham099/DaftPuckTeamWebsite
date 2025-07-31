import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disableGutters?: boolean;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  children, 
  maxWidth = 'lg',
  disableGutters = false 
}) => {
  const theme = useTheme();
  
  const getMaxWidth = () => {
    switch (maxWidth) {
      case 'xs': return '444px';
      case 'sm': return '600px';
      case 'md': return '900px';
      case 'lg': return '1200px';
      case 'xl': return '1536px';
      default: return '1200px';
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: getMaxWidth(),
        margin: '0 auto',
        padding: disableGutters ? 0 : {
          xs: '0 1rem',
          sm: '0 1.5rem',
          md: '0 2rem',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ResponsiveContainer;
