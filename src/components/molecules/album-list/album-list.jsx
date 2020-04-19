import React, {useEffect} from 'react';
import styled from 'styled-components';

import { AppTable } from "../../";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {useDispatch, useSelector} from "react-redux";
import {getTopAlbums} from "../../../redux/selectors";
import {Operation} from "../../../redux/reducer";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ReactSVG} from "react-svg";
import iconLike from './icon-like.svg';
import iconLikeChecked from './icon-like-checked.svg';

export const EnhancedReactSVG = styled(ReactSVG)`
	display: flex;
	align-items: center;
  justify-content:center;
	div {
		height: fit-content;
		display: flex;
		align-items: center;
	}
    ${({ cursor }) => cursor && `cursor:pointer;`}
`;

const columns = [
  { id: 'img', label: '', padding: 'checkbox' },
  { id: 'num', label: '#',  align: 'left', padding: 'none' },
  { id: 'title', label: 'Title', padding: 'checkbox', align: 'left', minWidth: '200px' },
  { id: 'artist', label: 'Artist', padding: 'checkbox', align: 'left',  },
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
  checkboxRoot: {
    border: '1px solid #fff',
  }
}));

const CustomTableCell = styled(TableCell)`
  color: #70808F;
  font-size: 12px;
  border-bottom: 1px solid #fff;
`;

const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  box-shadow: 7px 7px 19px rgba(12, 48, 75, 0.13), -7px -7px 19px rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  border: 5px solid #E1E9EC;

  &:hover {
    box-shadow: 7px 7px 19px rgba(12, 48, 75, 0.26), -7px -7px 19px rgba(255, 255, 255, 1);
  }
`;

const Link = styled.a`
  display: inline-block;
  vertical-align: middle;
  color: inherit;

  &:hover {
    color: rgba(160, 115, 255, 1);
    text-decoration: none;
  }
`;

const AlbumList = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getTopAlbums);
  const classes = useStyles();

  useEffect(() => {
      if (!albums) {
        dispatch(Operation.fetchTopAlbums());
      }
  }, [dispatch]);

  const renderRow = () => {
    return albums.map((it) => (
      <TableRow key={it.id}>
        <CustomTableCell>
          <Link href={it.albumLink} target="_blank">
            <Image src={it.img} alt="preview" />
          </Link>
        </CustomTableCell>
        <CustomTableCell style={{fontSize: '16px', fontWeight: 700}}>{it.num}</CustomTableCell>
        <CustomTableCell>
          <Link href={it.albumLink} target="_blank">
            {it.title}
          </Link>
        </CustomTableCell>
        <CustomTableCell>
          <Link href={it.albumLink} target="_blank">
            {it.artist}
          </Link>
        </CustomTableCell>
        <CustomTableCell>
          <Link href={it.genreLink} target="_blank">
            {it.genre}
          </Link>
        </CustomTableCell>
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
            icon={<EnhancedReactSVG src={iconLike} />}
            checkedIcon={<EnhancedReactSVG src={iconLikeChecked} />}
          />
        </CustomTableCell>
      </TableRow>
    ));
  };

  return albums ? <AppTable columns={columns} renderRow={renderRow} /> : null;
};

export default AlbumList;
