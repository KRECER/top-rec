import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { CheckBox, CheckBoxOutlineBlank} from '@/components/';

const AppCheckbox = (props) => {
  const {label, size, value, color, intermediate, checked, disabled, icon, checkedIcon, changeHandler} = props;

  return (
    <>
      {label.length < 1 ? (
        <Checkbox
          checked={checked}
          indeterminate={intermediate}
          disabled={disabled}
          value={value}
          color={color}
          size={size}
          icon={icon}
          checkedIcon={checkedIcon}
          onChange={changeHandler}
        />
      ) : (
        <FormControlLabel
          label={label}
          control={
            (
              <Checkbox
                checked={checked}
                indeterminate={intermediate}
                disabled={disabled}
                value={value}
                color={color}
                size={size}
                icon={icon}
                checkedIcon={checkedIcon}
                onChange={changeHandler}
              />
            )
          }
        />
      )}
    </>
  );
};

AppCheckbox.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']).isRequired,
  checked: PropTypes.bool,
  intermediate: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
  changeHandler: PropTypes.func,
};

AppCheckbox.defaultProps = {
  label: '',
  color: 'secondary',
  size: 'medium',
  checked: false,
  intermediate: false,
  disabled: false,
  icon: <CheckBoxOutlineBlank />,
  checkedIcon: <CheckBox />,
  changeHandler: () => {},
};
