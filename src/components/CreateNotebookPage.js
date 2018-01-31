import React from 'react';
import { connect } from 'react-redux';
import NotebookForm from './NotebookForm';
import { startAddNotebook } from '../actions/notebookList';

export class CreateNotebook extends React.Component { 
  
  onSubmit = (notebook) => {
    this.props.startAddNotebook(notebook);
    this.props.history.push('/');
  };
  
  render() {
    return (
      <div>
        <h1>Crie um novo Caderno</h1>
        <NotebookForm onSubmit={this.onSubmit} />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    startAddNotebook: (notebook) => dispatch(startAddNotebook(notebook))
  };
};

export default connect(undefined, mapDispatchToProps)(CreateNotebook);