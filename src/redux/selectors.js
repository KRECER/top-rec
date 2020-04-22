import { createSelector } from 'reselect';
import NameSpace from "@/redux/reducers/name-spaces";

const getAlbums = (state) => {
  return state[NameSpace.ALBUM].items;
};

const getAlbumsPending = (state) => {
  return state[NameSpace.API].GET_ALBUMS.pending;
};

const getSearchTerm = (state) => {
  return state[NameSpace.ALBUM].searchTerm;
};

const getFilteredAlbums = createSelector(
  getAlbums,
  getSearchTerm,
  (albums, term) => albums.filter(({title}) => title.toLowerCase().includes(term)),
);

export { getAlbumsPending, getAlbums, getFilteredAlbums };
