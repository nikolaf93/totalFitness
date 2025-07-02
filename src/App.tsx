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

interface AppProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

function App({ isDark, onToggleTheme }: AppProps) {
  return (
    <Wrapper>
      <BarContainer>
        <ResponsiveAppBar isDark={isDark} onToggleTheme={onToggleTheme} />
      </BarContainer>
      <DashboardContainer>
        <UserDashboard />
      </DashboardContainer>
    </Wrapper>
  );
}

export default App;
