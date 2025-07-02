import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const UserDashboard: React.FC = () => {
  const [tab, setTab] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const tabLabels = ['Food Tracking', 'Exercises'];

  return (
    <Box sx={{ p: 3, backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold', color: '#1976d2' }}>
        User Dashboard
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 300 }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            '& .MuiTab-root:focus:not(:focus-visible)': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        >
          {tabLabels.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
        <Box sx={{ flex: 1, p: 2 }}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ color: '#4fc3f7', mb: 2 }}>
              {tabLabels[tab]}
            </Typography>
            <Button variant="contained" color="primary">
              {tabLabels[tab]}
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard; 