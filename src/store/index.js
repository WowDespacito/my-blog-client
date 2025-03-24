import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      innerWidth: null, // 当前窗口宽度
      boxOpenState:false, // 盒子开启状态
      mobileOpenState: false, // 移动端开启状态
      mobileFuncState: false, // 移动端功能区开启状态
  }
},
  actions: {
    setInnerWidth(value){
      this.innerWidth = value;
      if (value >= 720){
        this.mobileFuncState = false;
        this.mobileOpenState = false;
      }
    }
  },
  persist: {
    key: "data",
    storage: window.localStorage,
    path: [
      
    ]
  }
});