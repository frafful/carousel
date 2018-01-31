import notebookListReducer from '../../reducers/notebookList';
import notebooks from '../fixtures/notebooks';

test('should set default state', () => {
  const state = notebookListReducer(undefined, '@@INIT');
  
  expect(state).toEqual([]);
});

test('should add a notebook', () => {
  const newNotebook = {
    id: 'abc',
    name: 'Amigos',
    createdAt: 5000
  };

  const action = {
    type: 'ADD_NOTEBOOK',
    notebook: newNotebook
  };

  const state = notebookListReducer(notebooks, action);
  expect(state).toEqual([
    ...notebooks,
    action.notebook
  ]);
});