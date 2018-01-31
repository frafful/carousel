import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addNotebook,
  startAddNotebook
} from '../../actions/notebookList';
import database from '../../firebase/firebase';
import notebooks from '../fixtures/notebooks';

const createMockStore = configureMockStore([thunk]);
const uid = 'testuid';

test('should setup add notebook action object', () => {
  const notebook = {
    id: '123',
    name: 'First Notebook',
    createdAt: 1500
  };
  const action = addNotebook(notebook);

  expect(action).toEqual({
    type: 'ADD_NOTEBOOK',
    notebook: {
      ...notebook 
    }
  });
});

test('should add new notebook to database and store', (done) => {
  const store = createMockStore({
    auth: {
      id: uid
    }
  });
  const notebookData = {
    name: 'Família',
    createdAt: '11000'
  };
  
  store.dispatch(startAddNotebook(notebookData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_NOTEBOOK',
      notebook: {
        ...notebookData,
        id: expect.any(String)
      }
    });

    return database.ref(`users/${uid}/notebooks/${actions[0].notebook.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(notebookData);
    done();
  });
});