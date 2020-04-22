import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    touchAction: 'none',
    backgroundColor: 'rgba(0,0,0,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
  },
}));

const AppSpinner = (props) => {
  const { size, color, overlay = false } = props;
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.overlay]: overlay,
      })}
    >
      <div className={classes.container}>
        <CircularProgress size={size} color={color} />
      </div>
    </div>
  );
};

AppSpinner.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  overlay: PropTypes.bool,
};

AppSpinner.defaultProps = {
  overlay: false,
};

export default AppSpinner;
