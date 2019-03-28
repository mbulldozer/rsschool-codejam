module.exports = function recursion(tree) {
  const arrTree = [];
  function recursionNode(node, array, currentDepth) {
    if (!arrTree[currentDepth]) arrTree[currentDepth] = [];
    arrTree[currentDepth].push(node.value);
    if (node.left !== undefined) recursionNode(node.left, array, currentDepth + 1);
    if (node.right !== undefined) recursionNode(node.right, array, currentDepth + 1);
  }
  recursionNode(tree, arrTree, 0);
  return arrTree;
};
