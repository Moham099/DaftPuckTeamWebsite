# Daft Puck - Hockey Team Website

A modern, responsive website for the Daft Puck beer league hockey team, built with React, You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 🎯 Responsive Design Features

### Mobile-First Approach
The website is built with a mobile-first approach, ensuring optimal performance on all devices.

### Breakpoint System
- **xs (0px+)**: Extra small devices (phones)
- **sm (576px+)**: Small devices (large phones)  
- **md (768px+)**: Medium devices (tablets)
- **lg (992px+)**: Large devices (desktops)
- **xl (1200px+)**: Extra large devices (large desktops)
- **xxl (1400px+)**: Extra extra large devices

### Responsive Components
- **Navigation**: Transforms to hamburger menu on mobile devices
- **Hero Section**: Dynamically adjusts font sizes and spacing across breakpoints
- **Grid Layouts**: Automatically reflow from 4 columns to 1 column based on screen size
- **Cards**: Optimized padding and hover effects for touch devices
- **Typography**: Scales appropriately across all screen sizes
- **Images & Icons**: Vector-based icons that scale perfectly

### Technical Implementation
- **SCSS Mixins**: Custom responsive mixins for efficient styling
- **CSS Grid**: Modern grid layouts with automatic responsiveness
- **Material-UI Breakpoints**: Consistent responsive behavior across components
- **Yarn Package Management**: Fast, reliable dependency management

### Performance Optimizations
- **Mobile-optimized**: Reduced animations and optimized touch targets on mobile
- **Efficient CSS**: SCSS variables and mixins reduce code duplication
- **Responsive Images**: Proper sizing and optimization across devices
- **Touch-friendly**: Appropriate sizing for touch interactions

## 📱 Tested Device Compatibility

The website has been optimized and tested for:
- **Mobile**: iPhone, Android phones (320px - 767px)
- **Tablet**: iPad, Android tablets (768px - 1023px)
- **Desktop**: Standard monitors (1024px - 1439px)
- **Large Desktop**: High-resolution displays (1440px+)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).ipt, Material-UI, and SCSS.

## 🏒 Features

- **Modern React Architecture**: Built with React 19 and TypeScript for type safety
- **Material-UI Components**: Professional, accessible UI components
- **SCSS Styling**: Custom styling with variables and mixins
- **Responsive Design**: Optimized for all device sizes
- **Hockey Team Focus**: Designed specifically for beer league teams

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Material-UI (MUI)** for components
- **SCSS** for custom styling
- **React Scripts** for build tooling

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Moham099/DaftPuckTeamWebsite.git
cd DaftPuckTeamWebsite
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # Navigation header
│   ├── Hero/           # Hero section
│   ├── About/          # About team section
│   ├── Schedule/       # Game schedule
│   ├── Roster/         # Team roster
│   └── Footer/         # Footer component
├── styles/             # SCSS styles
│   └── main.scss       # Main stylesheet
├── App.tsx             # Main app component
└── index.tsx           # Entry point
```

## 🎨 Features Overview

### Hero Section
- Eye-catching hero with team branding
- Call-to-action buttons
- Hockey-themed imagery

### About Section
- Team history and mission
- Feature cards highlighting team values
- Responsive grid layout

### Schedule Section
- Upcoming games and past results
- Game details with venues and times
- Win/loss tracking

### Roster Section
- Player profiles with positions
- Team captain designation
- Player statistics and info

### Responsive Navigation
- Mobile-friendly hamburger menu
- Smooth scrolling to sections
- Material-UI components

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
