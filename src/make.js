module.exports = function make(...args) {
  const cache = args.slice();
  return function f(...items) {
    if (typeof items[0] === 'function') return cache.reduce(items[0]);
    items.forEach(item => cache.push(item));
    return f;
  };
};
