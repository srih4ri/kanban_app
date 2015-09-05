import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn Flux'
        },
        {
          id: uuid.v4(),
          task: 'Learn Everything'
        }
      ]
    };

    this.addNote = this.addNote.bind(this);
  }

  render () {
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={this.state.notes} />
      </div>
    );
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat([
        {
          id: uuid.v4(),
          task: 'Learn Everything'
        }
      ])
    });
  }

}
