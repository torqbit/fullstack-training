import {Queue} from '../queue/queue.mjs'
class TreeNode {
    constructor(name) {
      this.name = name;
      this.left = null; 
      this.right = null; 
    }
  }
  const grandparent = new TreeNode("John");
  const parent1 = new TreeNode("Mike");
  const parent2 = new TreeNode("Sarah");
  const child1 = new TreeNode("Tom");
  const child2 = new TreeNode("Emily");
  const child3 = new TreeNode("David");

  grandparent.left = parent1; 
  grandparent.right = parent2; 
  parent1.left = child1;
  parent1.right = child2; 
  parent2.left = child3; 
  
function getTreeHeight(node) {
    if (node === null){
        return 0
    }
    else{
    const leftheight= getTreeHeight(node.left);
    const rightheight= getTreeHeight(node.right);
    return 1 + Math.max(leftheight, rightheight)
    }
}
console.log(getTreeHeight(grandparent));

function countNodes(node){
    if (node === null){
        return 0
    }
    else{
    const leftcount = countNodes(node.left);
    const rightcount= countNodes(node.right);
    return 1+ leftcount + rightcount
    }
}
console.log(countNodes(grandparent))

function findLeafNodes(node, arr=[]){
    if (node === null){
        return arr
    }
    if (node.left=== null && node.right=== null){
        arr.push(node.name)
    }
        
    findLeafNodes(node.left, arr)
    findLeafNodes(node.right, arr)
    return arr
}

console.log(findLeafNodes(grandparent))

function levelOrderTraversal(node){
    const queue = new Queue()
    queue.enqueue(node)
    queue.enqueue(null)

    while (!queue.isEmpty()){
        const temp = queue.peek()
        queue.dequeue()
        if (temp==null){
           console.log('\n')
           if (!queue.isEmpty()){
            queue.enqueue(null)
           }
        }
        else{
            console.log(temp.name)
            if (temp.left){
                queue.enqueue(temp.left)
            }
            if (temp.right){
                queue.enqueue(temp.right)
            }
        }
    }
}
console.log(levelOrderTraversal(grandparent))

function mirrorTree(node){
    if (node == null){
        return
    }
    node.left, node.right = node.right, node.left

    mirrorTree(node.left)
    mirrorTree(node.right)
}

console.log(mirrorTree(grandparent))