import {h} from 'vue';
import { SpaCandle } from "@icon-park/vue-next";

// 时钟
export const getCurrentTime = () => {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
    let currentTime = {
        year,
        month,
        day,
        hour,
        minute,
        second,
        weekday: weekday[time.getDay()],
    }
    return currentTime;
}

// 欢迎提示
export const helloInit = () => {
    const hour = new Date().getHours();
    let hello = null;
    if (hour < 6) {
        hello = "凌晨好";
    } else if (hour < 12) {
        hello = "早上好";
    } else if (hour < 14) {
        hello = "中午好";
    } else if (hour < 17) {
        hello = "下午好";
    } else if (hour < 19) {
        hello = "傍晚好";
    }
    else if (hour < 22) {
        hello = "晚上好";
    }
    else {
        hello = "夜深了";
    }
    ElMessage({
        dangerouslyUseHTMLString: true,
        message: `<strong>${hello}</strong> 欢迎来到我的博客`
    })
}

// 默哀模式
const anniversaries = {
    4.4: "清明节",
    5.12: "汶川地震",
    7.7: "卢沟桥事变",
    9.18: "九一八事变",
    12.13: "南京大屠杀纪念日"
};
export const checkDays = () => {
    const myDate = new Date();
    const mon = myDate.getMonth() + 1;
    const date = myDate.getDate();
    const key = `${mon}.${date}`;
    if (Object.prototype.hasOwnProperty.call(anniversaries, key)) {
        console.log(`今天是${anniversaries[key]}`);
        const gray = document.createElement("style");
        gray.innerHTML = "html{filter: grayscale(100%);}";
        document.head.appendChild(gray);
        ElMessage({
            message: `今天是${anniversaries[key]}，请勿忘记历史`,
            duration: 14000,
            icon: h(SpaCandle, {
                theme: "filled",
                fill: "#efefef"
            })
        })
    }
}