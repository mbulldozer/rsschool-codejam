module.exports = function sumOfOther(array) {
  let sum = 0;
  for(let item of array){
    sum += item;
  }
  return array.map(item => sum - item);
}
