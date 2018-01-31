const defaultState = {
  notebook: {},
  entries: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_ENTRY':
      return { 
        ...state,
        entries: state.entries.concat([action.entry])
      };
      //SET_NOTEBOOK
    default:
      return state;
  }
};