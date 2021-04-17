import React, { FC } from 'react';
import clsx from 'clsx';
import { useCounterStore } from 'store/counterContext';
import { useObserver } from 'mobx-react-lite';
import classes from './styles.module.scss';

type CounterProps = {
  counter: number;
};

export const Counter: FC<CounterProps> = ({ counter }) => {
  const store = useCounterStore();

  return useObserver(() => (
    <div className={classes.counter}>
      <div className={classes.number}>{counter}</div>
      <div className={classes.btns}>
        <button
          type="button"
          className={clsx(classes.btn, classes.btnAdd)}
          onClick={() => store.increaseCounter()}
        >
          +
        </button>
        <button
          type="button"
          className={clsx(classes.btn, classes.btnDec)}
          onClick={() => store.decreaseCounter()}
        >
          -
        </button>
      </div>
    </div>
  ));
};
