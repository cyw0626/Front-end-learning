{/**
    节流（throttle）:
    一段事件内只执行一次。
    一段事件内，频繁处理的事件只执行一次。
*/}
function throttle(fn , delay) {
    let flag = true;

    return function () {
        if (!flag) return;
        flag = false;

        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, delay);
    }
}