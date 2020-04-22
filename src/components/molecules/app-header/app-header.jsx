import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { MainNav } from '@/components/';
import {IconDonation, IconSurface} from "@/components/atoms/app-icon/app-icon.jsx";
import { AppSearch } from "@/components/";

import logo from './logo.svg';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: theme.spacing(10),
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  logo: {
    display: 'flex',
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1, 3),
    width: 150,
    flex: '0 0 150px',
  },
}));

const pages = [
  {
    key: 'home',
    path: '/',
    label: 'TOP 100',
    icon: <IconSurface />,
  },
  {
    key: 'order',
    path: '/donation',
    label: 'Donation',
    icon: <IconDonation />,
  },
];

const AppHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.container} position="sticky">
        <img src={logo} className={classes.logo} alt="logo" />
        <MainNav pages={pages} />
        <AppSearch />
      </AppBar>
    </div>
  );
};

export default AppHeader;
