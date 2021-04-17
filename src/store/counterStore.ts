export type StoreCounter = {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

export function createCountStore(): StoreCounter {
  return {
    counter: 0,
    increaseCounter() {
      this.counter += 1;
    },
    decreaseCounter() {
      this.counter -= 1;
    },
  };
}
