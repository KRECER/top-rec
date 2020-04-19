import React from 'react';
import { FormControl, OutlinedInput, InputAdornment, makeStyles } from '@material-ui/core';
import {EnhancedReactSVG} from "../../styled-components";
import searchIcon from './icon-search.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    borderColor: theme.palette.primary.main,
    borderRadius: '50px',
    backgroundColor: theme.palette.secondary.main,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },
  notched: {
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
  },
  formControl: {
    marginLeft: 'auto',
    marginRight: '24px',
  }

}));
const AppSearch = () => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <OutlinedInput
        classes={{
          root: classes.root,
          notchedOutline: classes.notched,
        }}
        endAdornment={(
          <InputAdornment position="end">
            <EnhancedReactSVG src={searchIcon} />
          </InputAdornment>
        )}
      />
    </FormControl>
  );
};

export default AppSearch;
