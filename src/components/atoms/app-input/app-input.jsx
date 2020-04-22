import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  root: {
    '& label + *': {marginTop: 0},
    '& .MuiInputBase-input': {
      padding: '10px 12px',
      backgroundColor: theme.palette.grey['100'],
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

const getFormat = (mask) => {
  let format;
  switch (mask) {
    case 'date':
      format = '##.##.####';
      break;
    case 'time':
      format = '##.##.####';
      break;
    case 'dateTime':
      format = '##.##.####';
      break;
    default: format = null;
  }
  return format;
};

const AppInput = (props) => {
  const {name,
    value,
    label,
    errorText,
    type,
    mask,
    onChange,
    className = null,
    error,
    required,
    disabled} = props;
  const classes = useStyles();

  return (
    <>
      <div className={className}>
        <FormControl className={classes.root} fullWidth error={error} required={required} disabled={disabled}>
          <InputLabel shrink>{label}</InputLabel>
          {mask === 'none' ? <Input type={type} name={name} value={value} onChange={onChange} /> : null }
          {mask !== 'none' ? <NumberFormat customInput={Input} name={name} value={value} format={getFormat(mask)} onChange={onChange} /> : null }
          <FormHelperText>{errorText || ''}</FormHelperText>
        </FormControl>
      </div>
    </>
  );
};

AppInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  errorText: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'search']),
  mask: PropTypes.oneOf(['none', 'date', 'time']),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.any,
};

AppInput.defaultProps = {
  value: '',
  label: '',
  error: false,
  disabled: false,
  required: false,
  errorText: '',
  type: 'text',
  mask: 'none',
  className: null,
};

export default AppInput;
