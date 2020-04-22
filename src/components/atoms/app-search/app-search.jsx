import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { EnhancedReactSVG } from "@/components/styled-components/";
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
  input: {
    padding: '15px 30px',
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

const AppSearch = (props) => {
  const { onChange } = props;
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <OutlinedInput
        classes={{root: classes.root, notchedOutline: classes.notched, input: classes.input}}
        endAdornment={(
          <InputAdornment position="end">
            <EnhancedReactSVG src={searchIcon} />
          </InputAdornment>
        )}
        onChange={onChange}
      />
    </FormControl>
  );

};

AppSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

AppSearch.defaultProps = {
  onChange: () => {},
};

export default AppSearch;
