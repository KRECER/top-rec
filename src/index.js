import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';

import { store } from './redux/store';
import { App } from './components/';
import styled from "styled-components";
import { theme } from "./components/theme";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #E1E9EC;
`;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Wrapper>
          <Container maxWidth="lg">
            <CssBaseline />
            <App />
          </Container>
        </Wrapper>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);
