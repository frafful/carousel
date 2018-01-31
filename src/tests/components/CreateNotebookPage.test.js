import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { CreateNotebook } from '../../components/CreateNotebookPage';
import notebooks from '../fixtures/notebooks';

test('should render create notebook page correctly', () => {
  const wrapper = shallow(<CreateNotebook />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const startAddNotebook = jest.fn();
  const history = { push: jest.fn() };
  
  const wrapper = shallow(<CreateNotebook startAddNotebook={startAddNotebook} history={history} />);
  wrapper.find('NotebookForm').prop('onSubmit')(notebooks[1]);
  
  expect(startAddNotebook).toHaveBeenLastCalledWith(notebooks[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});