import React, { FC } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createCountStore, StoreCounter } from './counterStore';

const CounterContext = React.createContext<StoreCounter>({
  counter: 0,
  decreaseCounter() {},
  increaseCounter() {},
});

export const CounterProvider: FC = ({ children }) => {
  const counterStore: StoreCounter = useLocalStore(createCountStore);
  return (
    <CounterContext.Provider value={counterStore}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterStore = () => React.useContext(CounterContext);
