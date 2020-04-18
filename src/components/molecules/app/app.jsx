import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import AppHeader from "../app-header/app-header";
import {DonationPage, HomePage} from "../../../pages";

const columns = [
  { id: 'img', label: '' },
  { id: 'num', label: '#', padding: 'default', align: 'left' },
  { id: 'title', label: 'Title', padding: 'default', align: 'left' },
  { id: 'artist', label: 'Artist', padding: 'default', align: 'left' },
  { id: 'genre', label: 'Genre', padding: 'default', align: 'left' },
  { id: 'price', label: 'Price', padding: 'default', align: 'left' },
];




const App = () => {
  return <>
    <AppHeader />
    <Switch>
      <Route path={'/donation'} component={DonationPage} />
      <Route path={'/'} component={HomePage} />
    </Switch>
  </>;
};

export default App;
