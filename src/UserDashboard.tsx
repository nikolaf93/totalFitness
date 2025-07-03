import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const tabLabels = [
  { label: 'Dashboard', icon: <EqualizerIcon /> },
  { label: 'Tracking', icon: <FoodBankIcon /> },
  { label: 'Exercises', icon: <FitnessCenterIcon /> },
];

const UserDashboard: React.FC = () => {
  const [tab, setTab] = React.useState(0);
  const theme = useTheme();

  return (
    <Box sx={{ p: 3, backgroundColor: theme.palette.background.default, minHeight: '100vh', pb: 10 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold', color: '#1976d2' }}>
        User Dashboard
      </Typography>
      <Box sx={{ flex: 1, p: 2, mb: 8 }}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ color: '#4fc3f7', mb: 2 }}>
            {tabLabels[tab].label}
          </Typography>
          <Button variant="contained" color="primary">
            {tabLabels[tab].label}
          </Button>
        </Paper>
      </Box>
      <Box sx={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 1201 }}>
        <BottomNavigation
          showLabels
          value={tab}
          onChange={(_event, newValue) => setTab(newValue)}
          sx={{
            borderTop: 1,
            borderColor: 'divider',
            backgroundColor: theme.palette.background.paper,
            '& .Mui-selected': {
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
            },
            '& .MuiBottomNavigationAction-root.Mui-selected': {
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
            },
            '& .MuiBottomNavigationAction-root': {
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
            },
          }}
        >
          {tabLabels.map((tab, idx) => (
            <BottomNavigationAction key={tab.label} label={tab.label} icon={tab.icon} />
          ))}
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default UserDashboard; 