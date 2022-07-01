class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  insertRecursively(index, value, currentNode) {
    if (index === -1) {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
      return;
    }

    if (index === 0) {
      const temp = new Node(value);
      temp.next = currentNode.next;
      currentNode.next = temp;
      return temp;
    }

    this.insertRecursively(index - 1, value, currentNode.next);
  }

  insertRec(index, value) {
    this.insertRecursively(index - 1, value, this.head);
  }

  printList() {
    let currentNode = this.head;

    let test = '';
    while (currentNode !== null) {
      test += currentNode.value + '->';
      currentNode = currentNode.next;
    }
    console.log(test);
  }
}
