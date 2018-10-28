module.exports = function sumOfOther(array) {
  const sum = array.reduce((acc, item) => acc + item, 0);
  return array.map(item => sum - item);
};
