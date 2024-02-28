class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (root.left === null) {
            root.left = node;
        } else if (root.right === null) {
            root.right = node;
        } else {
            this.insertNode(root, node);
        }
    }

    isSymmetric() {
        if (this.isEmpty()) {
            return true; // An empty tree is symmetric
        }

        function isMirror(left, right) {
            if (!left && !right) {
                return true;
            }
            if (!left || !right || left.value !== right.value) {
                return false;
            }

            return isMirror(left.left, right.right) && isMirror(left.right, right.left);
        }

        return isMirror(this.root.left, this.root.right);
    }

    displayInOrder() {
        this.inOrderTraversal(this.root);
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();

tree.insert(1);
tree.insert(2);
tree.insert(2);
tree.insert(3);
tree.insert(3);

tree.displayInOrder();

console.log(tree.isSymmetric());

