import React from 'react';
import moment from 'moment';

export default class NotebookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.notebook ? props.notebook.name : '',
      createdAt: props.notebook ? moment(props.notebook.createdAt) : moment(),
      error: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.name) {
      this.setState(() => ({
        error: 'Favor informar o nome do caderno'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({name}));
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Título"
            value={this.state.name}
            onSubmit={this.onSubmit}
            onChange={this.onNameChange}
          />
          <button>Criar Caderno</button>
        </form>
      </div>
    );
  }
};