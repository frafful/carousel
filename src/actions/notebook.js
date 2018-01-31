import database from '../firebase/firebase';

export const addEntry = (entry) => {
  return {
    type: 'ADD_ENTRY',
    entry: entry
  }; 
};

export const startAddEntry = (entryData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const notebookId = getState().notebook.id;
    const {
      title = '',
      description = '',
      date = 0
    } = entryData;

    //TODO: Check if notebook id exists
    const entry = { title, description, date };
    
    return database.ref(`users/${uid}/notebooks/${notebookId}/entries`).push(entry).then((ref) => {
      dispatch(addEntry({
        id: ref.key,
        ...entry
      }));
    });
  };
}

// set notebook 
// start set notebook