import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx'

const notes = [
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
];


export default class App extends React.Component {

  render () {
    return (
      <div>
        <Notes items={notes} />
      </div>
    );
  }

}
