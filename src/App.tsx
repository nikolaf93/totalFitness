// import AppBar from '@mui/material/AppBar';
import styled from 'styled-components';
import ResponsiveAppBar from './ResponsiveAppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

const BarContainer = styled.div`
  top: 0px;
  position: absolute;
  width: 100%;
`;

function App() {
  return (
    <BarContainer>
      <ResponsiveAppBar />
    </BarContainer>
  );
  // return (

  //   <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: '#fff' }}>
  //     <Toolbar>
  //       <Typography
  //         variant="h5"
  //         component="div"
  //         sx={{ fontWeight: 'bold', color: '#4fc3f7', flexGrow: 0 }}
  //       >
  //         TotalFitness
  //       </Typography>
  //     </Toolbar>
  //   </AppBar>
  // );
}

export default App;
