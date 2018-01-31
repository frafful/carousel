import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  addEntry,
  startAddEntry
} from '../../actions/notebook';
import notebook from '../fixtures/notebook';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'userId';
const notebookId = 'notebookId';

test('should setup add entry action object', () => {
  const action = addEntry(notebook.entries[2]);

  expect(action).toEqual({
    type: 'ADD_ENTRY',
    entry: notebook.entries[2]
  });
});

test('should add entry to database and store', (done) => {
  const store = createMockStore({
    auth: { uid },
    notebook: { id: notebookId }
  });

  const entryData = {
    title: 'Registro gerado pelo teste',
    description: 'Lorem ipsum',
    date: 500000
  };
  
  store.dispatch(startAddEntry(entryData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_ENTRY',
      entry: {
        id: expect.any(String),
        ...entryData
      }
    });    

    return database.ref(`users/${uid}/notebooks/${notebookId}/entries/${actions[0].entry.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(entryData);
    done();
  });
});