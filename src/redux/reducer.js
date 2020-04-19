import { getTopAlbumsCall } from "../services/api";

const initialState = {
  albums: [],
  isLoading: false,
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

const Operation = {

  fetchTopAlbums: () => (dispatch) => {
    dispatch(ActionCreators.getTopAlbumsRequest());

    getTopAlbumsCall()
      .then((res) => {
        dispatch(ActionCreators.getTopAlbumsSuccess(res));
      })
      .catch((e) => {
        dispatch(ActionCreators.getTopAlbumsFail(e));
      });
  },

};

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case ActionTypes.GET_TOP_ALBUMS_REQUEST:
      return {...state, isLoading: true}
    case ActionTypes.GET_TOP_ALBUMS_SUCCESS:
      return {...state, isLoading: false, albums: action.payload}
    case ActionTypes.GET_TOP_ALBUMS_FAIL:
      return {...state, isLoading: false}
    default:
      return state;
  }

};

export { ActionCreators, Operation, reducer };
