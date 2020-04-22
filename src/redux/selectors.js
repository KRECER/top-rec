const getTopAlbums = (state) => {
  return state.albums.items;
};

const getTopAlbumsPending = (state) => {
  return state.api['GET_TOP_ALBUMS'].pending;
};

export { getTopAlbumsPending, getTopAlbums }
