import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

export const createIcon = (props) => {
  const { viewBox, path, ...rest } = props;

  return (
    <SvgIcon viewBox={viewBox} {...rest}>
      {path.map((it, idx) => <path d={it} key={`path-${idx}`}/>)}
    </SvgIcon>
  );
};

export const IconSurface = () => (
  createIcon({
    viewBox: '0 0 11 16',
    path:
      ['M2.77037 15.4424C1.09883 9.93439 4.63075 7.92328 4.63075 7.92328C4.38363 10.8624 6.05386 13.1522 6.05386 13.1522C6.66814 12.9668 7.84063 12.1006 7.84063 12.1006C7.84063 13.1522 7.22196 15.4411 7.22196 15.4411C7.22196 15.4411 9.38774 13.7664 10.0695 10.9851C10.7504 8.2037 8.77257 5.41137 8.77257 5.41137C8.89175 7.37998 8.22576 9.31616 6.92096 10.7954C6.98624 10.72 7.04101 10.6363 7.08307 10.5456C7.31748 10.0768 7.69385 8.8583 7.47346 6.03661C7.16325 2.07574 3.57437 0.405518 3.57437 0.405518C3.8837 2.81884 2.95614 3.37486 0.783359 7.95571C-1.38942 12.5357 2.77037 15.4424 2.77037 15.4424Z'],
  })
);

export const IconDonation = () => (
  createIcon({
    viewBox: '0 0 16 16',
    path:
      [
        'M8.13959 10.8389C7.77324 11.0912 6.81133 11.6761 5.77463 11.6795C5.84948 11.8336 5.89514 12.0042 5.89514 12.1866C5.89514 12.7747 5.45724 13.2582 4.89093 13.3402V13.6915C4.89093 13.8763 4.74121 14.0259 4.55618 14.0259C4.37115 14.0259 4.22143 13.8763 4.22143 13.6915V13.3571H3.552C3.36697 13.3571 3.21725 13.2075 3.21725 13.0227C3.21725 12.8378 3.36697 12.6882 3.552 12.6882H4.72357C5.00014 12.6882 5.22567 12.4632 5.22567 12.1866C5.22567 11.91 5.0001 11.685 4.72357 11.685H4.38882C3.74289 11.685 3.21725 11.1599 3.21725 10.5146C3.21725 10.0823 3.45493 9.70809 3.80522 9.50678C4.0295 8.70598 4.80758 7.93697 5.49383 7.46603C5.18764 7.39263 4.87307 7.35205 4.55621 7.35205C2.3412 7.35205 0.53936 9.15213 0.53936 11.365C0.53936 13.5778 2.3412 15.3779 4.55621 15.3779C6.77122 15.3779 8.57306 13.5778 8.57306 11.365C8.57306 11.1102 8.54438 10.8591 8.49636 10.6116C8.37922 10.6813 8.26047 10.7555 8.13959 10.8389Z',
        'M12.3748 0.671635C12.2656 0.629835 12.1414 0.647472 12.0486 0.720622C12.0368 0.730099 10.8018 1.68988 9.81132 2.00275C9.57595 2.07687 9.24447 2.16929 8.86397 2.27577C7.0471 2.78328 5.50155 3.24502 4.98899 3.75711C4.87263 3.87303 4.51827 4.22674 4.11749 6.27564C4.09788 6.37494 4.12402 6.47746 4.18942 6.55488C4.25416 6.63227 4.33717 6.67507 4.45158 6.67441L4.55618 6.66886C5.21651 6.66886 5.85591 6.80439 6.45674 7.07151C6.53912 7.10776 6.63392 7.10939 6.71891 7.07575C6.80326 7.04145 6.86995 6.97451 6.90327 6.88994L7.14846 6.27793C7.33088 6.226 7.62442 6.13816 7.85389 6.04998C7.92581 6.09046 8.00555 6.12542 8.09123 6.16264C8.22918 6.22339 8.38085 6.28967 8.49853 6.38244C8.14417 6.87883 7.20206 7.38859 6.43911 7.69657C5.82717 7.94345 4.59675 8.91697 4.42415 9.76572C4.35879 10.0854 4.43853 10.3682 4.65428 10.5838C4.93411 10.8636 5.31853 11.0113 5.76572 11.0113C6.61761 11.0113 7.44332 10.5057 7.75911 10.2882C8.50182 9.77617 9.37985 9.39636 9.94406 9.34248C10.0375 9.33366 10.1265 9.32974 10.2141 9.3255C10.6972 9.30297 11.1973 9.27978 12.1172 8.61129C12.6115 8.25237 12.8959 7.78375 13.1973 7.28802C13.6105 6.60612 14.0387 5.90139 15.1011 5.28612C15.2044 5.22637 15.2679 5.11597 15.2679 4.99678C15.2678 1.81465 12.4036 0.682745 12.3748 0.671635Z',
      ],
  })
);

export const Magnify = (props) =>
  createIcon({
    viewBox: '0 0 24 24',
    path:
      ['M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'],
    ...props,
  });

export const Floppy = () =>
  createIcon({
    viewBox: '0 0 448 512',
    path:
      ['M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM288 64v96H96V64h192zm128 368c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h16v104c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24V64.491a15.888 15.888 0 0 1 7.432 4.195l83.882 83.882A15.895 15.895 0 0 1 416 163.882V432zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 144c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56z'],
  });

createIcon.propTypes = {
  viewBox: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
