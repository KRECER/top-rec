import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppHeader } from "@/components/";
import { DonationPage, HomePage } from "@/pages";

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
