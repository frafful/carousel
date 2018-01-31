export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTEBOOK':
      return [
        ...state,
        action.notebook
      ];
    default:
      return state;
  }
}