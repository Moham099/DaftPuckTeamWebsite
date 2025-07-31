import { Theme } from '@mui/material/styles';

// Responsive spacing utility functions
export const getResponsiveSpacing = (base: number) => ({
  xs: base * 0.5,
  sm: base * 0.75,
  md: base,
  lg: base * 1.25,
  xl: base * 1.5,
});

export const getResponsiveFontSize = (base: number) => ({
  xs: `${base * 0.8}rem`,
  sm: `${base * 0.9}rem`,
  md: `${base}rem`,
  lg: `${base * 1.1}rem`,
  xl: `${base * 1.2}rem`,
});

export const getResponsivePadding = (theme: Theme, multiplier: number = 1) => ({
  xs: theme.spacing(2 * multiplier),
  sm: theme.spacing(3 * multiplier),
  md: theme.spacing(4 * multiplier),
  lg: theme.spacing(5 * multiplier),
  xl: theme.spacing(6 * multiplier),
});

export const getResponsiveMargin = (theme: Theme, multiplier: number = 1) => ({
  xs: theme.spacing(1 * multiplier),
  sm: theme.spacing(2 * multiplier),
  md: theme.spacing(3 * multiplier),
  lg: theme.spacing(4 * multiplier),
  xl: theme.spacing(5 * multiplier),
});

// Common breakpoint values
export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

// Grid utilities
export const getResponsiveColumns = (columns: {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}) => {
  const { xs = 1, sm = 1, md = 2, lg = 3, xl = 4 } = columns;
  
  return {
    xs: `repeat(${xs}, 1fr)`,
    sm: `repeat(${sm}, 1fr)`,
    md: `repeat(${md}, 1fr)`,
    lg: `repeat(${lg}, 1fr)`,
    xl: `repeat(${xl}, 1fr)`,
  };
};
