import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  tab: {
    opacity: 1,
  },
  tabSelected: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  indicator: { backgroundColor: 'transparent'},
  flexContainer: {
    height: '100%',
  },
}));

const MainNav = (props) => {
  const { pages } = props;
  const classes = useStyles();
  const location = useLocation();

  return (
    <Tabs value={location.pathname === '/' ? pages[0].path : location.pathname} classes={{indicator: classes.indicator, flexContainer: classes.flexContainer }}>
      {pages.map(({key, label, icon, path}) => (
        <Tab key={key} component={NavLink} label={label} to={path} value={path} icon={icon} classes={{root: classes.tab, selected: classes.tabSelected}} />
      ))}
    </Tabs>
  );
};

MainNav.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default MainNav;
