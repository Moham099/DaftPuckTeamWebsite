import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Schedule from './components/Schedule/Schedule';
import Roster from './components/Roster/Roster';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

// Create custom Material-UI theme for hockey team - matching Daft Puck jersey
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c2c2c', // Dark charcoal gray (main jersey color)
      light: '#4a4a4a', // Lighter gray
      dark: '#1a1a1a', // Darker gray
    },
    secondary: {
      main: '#ff8f00', // Orange (jersey stripe color)
      light: '#ffb74d', // Lighter orange
      dark: '#e65100', // Darker orange
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White for cards/paper elements
    },
    text: {
      primary: '#2c2c2c', // Dark gray for primary text
      secondary: '#5a5a5a', // Medium gray for secondary text
    },
    error: {
      main: '#d32f2f', // Standard red for errors
    },
    warning: {
      main: '#ff8f00', // Use the orange for warnings too
    },
    info: {
      main: '#757575', // Gray for info
    },
    success: {
      main: '#4caf50', // Standard green for success
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Roboto Slab, serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto Slab, serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Roboto Slab, serif',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Schedule />
        <Roster />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
