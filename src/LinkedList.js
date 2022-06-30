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

  insertRec() {}

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
