/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
    function inOrder (root){
        if(!root) return;
        inOrder(root.left);
        arr.push(root.val)
        inOrder(root.right)
    }
    inOrder(root);
    return arr;
};