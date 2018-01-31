import notebookReducer from '../../reducers/notebook';
import notebook from '../fixtures/notebook';

test('should set default state', () => {
  const state = notebookReducer(undefined, '@@INIT');

  expect(state).toEqual({
    notebook: {},
    entries: []
  });
});

test('should add an entry', () => {
  const newEntry = {
    id: '4',
    title: 'Maresias',
    description: 'Lorem ipsum',
    date: -3000
  };

  const action = {
    type: 'ADD_ENTRY',
    entry: newEntry
  }

  const state = notebookReducer(notebook, action);
  expect(state).toEqual({
    ...notebook,
    entries: [
      ...notebook.entries,
      newEntry
    ]
  });
});