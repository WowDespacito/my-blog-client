import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    theme: "light",
    fontSize: 16,
  }),
  actions: {
    setTheme(newTheme) {
      this.theme = newTheme;
    },
    setFontSize(newSize) {
      this.fontSize = newSize;
    },
  },
});