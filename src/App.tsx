import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import FormList from './components/FormList';
import {Sub} from './types';

interface subStates {
  sub: Array<Sub>,
  num: number,
};

const initialState = [{
  name: 'Dapelu',
  subscript: 3,
  avatar: 'https://i.pravatar.cc/150?u=dapelu',
  description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum neque.',
},
{
  name: 'sergio',
  subscript: 2,
  avatar: 'https://i.pravatar.cc/150?u=tom',
}
];

function App() {
  const [subs, setSubs] = useState<subStates['sub']>([]);
  const [numSuscritors, setNumSuscritors] = useState<subStates['num']>()

  useEffect(() => {
    setSubs(initialState);
  }, []);

  const addSub = (sub: Sub) => {
    setSubs([...subs, sub]);
  };

  return (
    <div className='App'>
      <h1>Subscriptors</h1>
      <List subs={subs} />
      <FormList onNewSub={addSub}/>
    </div>
  );
}

export default App;
