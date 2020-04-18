import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { store } from './redux/store';
import { App } from './components/';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #E1E9EC;
`;

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Router>
      <Wrapper>
        <Container maxWidth="lg">
          <App />
        </Container>
      </Wrapper>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
