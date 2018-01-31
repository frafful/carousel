import database from '../firebase/firebase';

export const addNotebook = (notebook) => ({
    type: 'ADD_NOTEBOOK',
    notebook
});

export const startAddNotebook = (notebookData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.id;
    const {
      name = '',
      createdAt = 0,
      entries = []
    } = notebookData;

    const notebook = { name, createdAt };
    
    return database.ref(`users/${uid}/notebooks`).push(notebook).then((ref) => {
      dispatch(addNotebook({
        id: ref.key,
        ...notebook
      }));
    });
  };
};