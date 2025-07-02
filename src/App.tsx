import styled from 'styled-components';
import ResponsiveAppBar from './ResponsiveAppBar';
import UserDashboard from './UserDashboard';

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
`;

const BarContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DashboardContainer = styled.div``;

function App() {
  return (
    <Wrapper>
      <BarContainer>
        <ResponsiveAppBar />
      </BarContainer>
      <DashboardContainer>
        <UserDashboard />
      </DashboardContainer>
    </Wrapper>
  );
}

export default App;
