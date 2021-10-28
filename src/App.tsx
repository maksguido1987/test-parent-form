import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import GlobalFonts from './GlobalStyles/GlobalFonts';
import GlobalStyle from './GlobalStyles/GlobalStyle';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <GlobalFonts />
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
