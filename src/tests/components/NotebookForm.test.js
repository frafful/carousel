import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotebookForm from '../../components/NotebookForm';
import notebooks from '../fixtures/notebooks';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NotebookForm />);
});

test('should render notebook form correctly', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render notebook form with notebook data', () => {
  wrapper = shallow(<NotebookForm notebook={notebooks[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form submition', () => {
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should set name on name change', () => {
  const value = 'abc';
  wrapper.find('input').simulate('change', { 
    target: { value }
  });

  expect(wrapper.state('name')).toEqual(value);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should call onSubmit prop for valid form sumission', () => {
  const onSubmit = jest.fn();
  wrapper = shallow(<NotebookForm notebook={notebooks[2]} onSubmit={onSubmit}/>);

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error')).toBe('');
  expect(onSubmit).toHaveBeenLastCalledWith({
    name: notebooks[2].name,
    createdAt: notebooks[2].createdAt
  });
});