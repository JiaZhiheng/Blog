/* 防抖函数 */
function debounce(fn, delay, immediate) {
  let timer = null;

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);

    if (immediate && !timer) {
      fn.apply(this, args);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };

  _debounce.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return _debounce;
}

/* 节流函数 */
function throttle(fn, delay, immediate) {
  let timer = null;

  const _throttle = function (...args) {
    if (timer) return;

    if (immediate) {
      fn.apply(this, args);
    }

    timer = setTimeout(() => {
      if (!immediate) {
        fn.apply(this, args);
      }
      timer = null;
    }, delay);
  };

  _throttle.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return _throttle;
}

export { debounce, throttle };
