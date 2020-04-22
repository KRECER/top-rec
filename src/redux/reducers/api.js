const initialState = {

};

const api = (state = initialState, action) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(action.type);
  if (!match) { return state; }
  const [, requestName, requestStatus] = match;

  switch (requestStatus) {
    case 'REQUEST':
      return {...state, [requestName]: {loaded: false, loading: true}};

    case 'SUCCESS':
      return {...state, [requestName]: {loaded: true, loading: false}};

    case 'FAIL':
      return {...state, [requestName]: {loaded: false, loading: false}};

    default:
      return state;
  }

};

export { api };
