const initialState = {
  'GET_ALBUMS': {pending: true},
};

const api = (state = initialState, action) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(action.type);
  if (!match) { return state; }
  const [, requestName, requestStatus] = match;

  switch (requestStatus) {
    case 'REQUEST':
      return {...state, [requestName]: {pending: true}};

    case 'SUCCESS':
      return {...state, [requestName]: {pending: false}};

    case 'FAIL':
      return {...state, [requestName]: {pending: false}};

    default:
      return state;
  }

};

export { api };
