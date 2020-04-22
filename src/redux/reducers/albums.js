import { ApiService } from "@/services/api-service";
import { transformAlbum } from "@/services/transform-service";

const initialState = {
  items: [],
  searchTerm: '',
};

const ActionTypes = {
  'GET_ALBUMS_REQUEST': 'GET_ALBUMS_REQUEST',
  'GET_ALBUMS_SUCCESS': 'GET_ALBUMS_SUCCESS',
  'GET_ALBUMS_FAIL': 'GET_ALBUMS_FAIL',
  'SEARCH': 'SEARCH',
};

const ActionCreators = {

  getAlbumsRequest() {
    return {type: ActionTypes.GET_ALBUMS_REQUEST};
  },

  getAlbumsSuccess(albums) {
    return {type: ActionTypes.GET_ALBUMS_SUCCESS, payload: albums};
  },

  getAlbumsFail(error) {
    return {type: ActionTypes.GET_ALBUMS_FAIL, payload: error};
  },

  search(term) {
    return {type: ActionTypes.SEARCH, payload: term.toLowerCase()};
  }

};

const Operations = {

  fetchAlbums: () => async (dispatch) => {
    dispatch(ActionCreators.getAlbumsRequest());

    try {
      const res = await ApiService.get(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`);
      const albums = res.data.feed.entry.map(transformAlbum);
      dispatch(ActionCreators.getAlbumsSuccess(albums));
    } catch(err) {
      dispatch(ActionCreators.getAlbumsFail(err));
    }

  },

};

const albums = (state = initialState, action) => {
    switch(action.type) {
      case ActionTypes.GET_ALBUMS_SUCCESS:
        return {...state, items: action.payload};
      case ActionTypes.SEARCH:
        return {...state, searchTerm: action.payload}
      default:
        return state;
    }
};

export { ActionCreators, Operations, albums };
