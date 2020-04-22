import { ApiService } from "@/services/api-service";
import { transformAlbum } from "@/services/transform-service";

const initialState = {
  items: []
};

const ActionTypes = {
  'GET_TOP_ALBUMS_REQUEST': 'GET_TOP_ALBUMS_REQUEST',
  'GET_TOP_ALBUMS_SUCCESS': 'GET_TOP_ALBUMS_SUCCESS',
  'GET_TOP_ALBUMS_FAIL': 'GET_TOP_ALBUMS_FAIL',
};

const ActionCreators = {

  getTopAlbumsRequest() {
    return {type: ActionTypes.GET_TOP_ALBUMS_REQUEST};
  },

  getTopAlbumsSuccess(albums) {
    return {type: ActionTypes.GET_TOP_ALBUMS_SUCCESS, payload: albums};
  },

  getTopAlbumsFail(e) {
    return {type: ActionTypes.GET_TOP_ALBUMS_FAIL, payload: e};
  },

};

const Operations = {

  fetchTopAlbums: () => async (dispatch) => {
    dispatch(ActionCreators.getTopAlbumsRequest());

    try {
      const res = await ApiService.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
      const albums = res.data.feed.entry.map(transformAlbum);
      dispatch(ActionCreators.getTopAlbumsSuccess(albums));
    } catch(e) {
      dispatch(ActionCreators.getTopAlbumsFail());
    }

  },

};

const albums = (state = initialState, action) => {
    return action.type === ActionTypes.GET_TOP_ALBUMS_SUCCESS ? {...state, items: action.payload} : state;
};

export { ActionCreators, Operations, albums };
