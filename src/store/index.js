import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      LoadStatus: false,  //总加载状态
      innerWidth: 0, //屏幕宽度
      imgLoadStatus: false, //图片加载状态
      coverType: 0, //封面类型
      backgroundShow: false, //背景图显示状态
    };
  },
  actions: {
    setInnerWidth(width) {
      this.innerWidth = width;
    },
    setLoadStatus(status) {
      this.LoadStatus = status;
    },
    setImgLoadStatus(status) {
      this.imgLoadStatus = status;
    }
  },
  persist: {
    key: 'view_state',
    paths: ['cover.type'], // 只持久化必要数据
    storage: sessionStorage // 改为会话存储
  }
});