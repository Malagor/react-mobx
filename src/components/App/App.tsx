import React from 'react';
import './App.css';
import { Counter } from 'components/Counter/Counter';
import { useObserver } from 'mobx-react-lite';
import { useCounterStore } from '../../store/counterContext';

function App() {
  const counterStore = useCounterStore();

  return useObserver(() => (
    <div className="App">
      <Counter counter={counterStore.counter} />
    </div>
  ));
}

export default App;
