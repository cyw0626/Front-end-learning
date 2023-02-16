{/**
    防抖（debounce）：
    将多次高频事件合成一件。
    事件被触发n秒后再执行回调，在n秒内重新触发，会重新计时。
    case：input搜索框、文本编辑器实施保存、DOM元素的拖拽、鼠标移动距离
*/}

function debounce(fn, delay) {
    let timer = null;

    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}