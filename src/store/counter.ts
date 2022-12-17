import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    addOneAction() {
      this.count++;
    },
  },
});

export default useCounterStore;
