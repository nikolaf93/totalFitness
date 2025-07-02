import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';

interface ResponsiveAppBarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout', 'Settings'];

function ResponsiveAppBar({ isDark, onToggleTheme }: ResponsiveAppBarProps) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const theme = useTheme();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSettingsClick = () => {
    setSettingsOpen(true);
    handleCloseUserMenu();
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.paper, color: '#4fc3f7' }} elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon sx={{ mr: 1, color: '#4fc3f7' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#4fc3f7',
              textDecoration: 'none',
            }}
          >
            TotalFitness
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={setting === 'Settings' ? handleSettingsClick : handleCloseUserMenu}
                >
                  <Typography sx={{ textAlign: 'center', color: '#1976d2' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Dialog open={settingsOpen} onClose={handleSettingsClose}>
              <DialogTitle>Settings</DialogTitle>
              <DialogContent>
                <FormControlLabel
                  control={<Switch checked={isDark} onChange={onToggleTheme} />}
                  label={isDark ? 'Dark Theme' : 'Light Theme'}
                />
              </DialogContent>
            </Dialog>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;