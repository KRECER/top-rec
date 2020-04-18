import React, {useEffect} from 'react';
import styled from 'styled-components';

import { AppTable } from "../../";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {useDispatch, useSelector} from "react-redux";
import {getTopAlbums} from "../../../redux/selectors";
import {Operation} from "../../../redux/reducer";
import Checkbox from "@material-ui/core/Checkbox";
import {Heart, HeartA, IconDonation} from "../../atoms/app-icon/app-icon";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SvgIcon from '@material-ui/core/SvgIcon';
import icon from './icon-like.svg';

const columns = [
  { id: 'img', label: '', padding: 'checkbox' },
  { id: 'num', label: '#',  align: 'left', padding: 'none' },
  { id: 'title', label: 'Title', padding: 'checkbox', align: 'left', minWidth: '210px' },
  { id: 'artist', label: 'Artist', padding: 'checkbox', align: 'left', minWidth: '160px' },
  { id: 'genre', label: 'Genre', padding: 'checkbox', align: 'left' },
  { id: 'price', label: 'Price', padding: 'default', align: 'left' },
  { id: 'action', label: '' },
];

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    minWidth: '40px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      borderColor: theme.palette.secondary.main,
    },
  },
}));

const CustomTableCell = styled(TableCell)`
  color: #70808F;
  font-size: 12px;
  border-bottom: 1px solid #fff;
`;

const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
`;

const AlbumList = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getTopAlbums);
  const classes = useStyles();

  useEffect(() => {
      dispatch(Operation.fetchTopAlbums());
  }, []);

  const renderRow = () => {
    return albums.map((it) => (
      <TableRow key={it.id}>
        <CustomTableCell style={{paddingLeft: 0}}>
          <Image src={it.img} alt="preview" />
        </CustomTableCell>
        <CustomTableCell>{it.num}</CustomTableCell>
        <CustomTableCell>{it.title}</CustomTableCell>
        <CustomTableCell>{it.artist}</CustomTableCell>
        <CustomTableCell>{it.genre}</CustomTableCell>
        <CustomTableCell>{it.price}</CustomTableCell>
        <CustomTableCell padding="none" align="center">
          <Checkbox
            classes={{
              root: classes.checkboxRoot,
              checked: classes.checkboxChecked,
            }}
            color="default"
            disableRipple
            disableFocusRipple
            icon={<SvgIcon component={icon}  />}
            checkedIcon={<Heart />}
          />
        </CustomTableCell>
      </TableRow>
    ));
  };

  return albums ? <AppTable columns={columns} renderRow={renderRow} /> : null;
};

export default AlbumList;
