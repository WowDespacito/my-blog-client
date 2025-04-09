import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      LoadStatus: false
    };
  },
  actions: {
    setInnerWidth(width) {
      this.innerWidth = width;
    }
  },
});