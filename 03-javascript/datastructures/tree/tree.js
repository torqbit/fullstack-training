// Node class to represent each node in the binary tree
class TreeNode {
  constructor(name) {
    this.name = name;
    this.left = null;
    this.right = null;
  }
}

// Assignment 1: Calculate the height of a binary tree
function getTreeHeight(root) {
  // Implement tree height calculation
  if (root === null) {
    return 0;
  } else {
    // Use recursion, ie: use the method getTreeHeight() to get the height of the left subtree and the right subtree
    // Get the height of the left subtree
    // Get the height of the right subtree
    // Return the maximum height of the two subtrees plus 1 for the current node
  }
}

// Assignment 2: Count total number of nodes
function countNodes(root) {
  // Implement node counting
  if (root === null) {
    return 0;
  } else {
    // Use recursion, ie: use the method countNodes() to count the nodes of the left subtree and the right subtree
    // Count the nodes of the left subtree
    // Count the nodes of the right subtree
    // Return the sum of the counts of the two subtrees plus 1 for the current node
  }
}

// Assignment 3: Find all leaf nodes
function findLeafNodes(root) {
  // Implement leaf node finding
  if (root === null) {
    return [];
  } else if (root.left === null && root.right === null) {
    // If the current node is a leaf node, return an array containing its name
    return [root.name];
  } else {
    // Use recursion, ie: use the method findLeafNodes() to find the leaf nodes of the left subtree and the right subtree
    // Find the leaf nodes of the left subtree
    // Find the leaf nodes of the right subtree
    // Return the concatenation of the arrays of the two subtrees
  }
}

// Assignment 4: Level order traversal
function levelOrderTraversal(root) {
  // Implement level order traversal
}

// Assignment 5: Create mirror image of tree
function mirrorTree(root) {
  // Implement tree mirroring
}

// Helper function to print the tree (from README example)
function printFamilyTree(node, level = 0) {
  if (node === null) return;

  console.log("  ".repeat(level) + node.name);
  printFamilyTree(node.left, level + 1);
  printFamilyTree(node.right, level + 1);
}

// Export all functions and classes
export { TreeNode, getTreeHeight, countNodes, findLeafNodes, levelOrderTraversal, mirrorTree, printFamilyTree };
