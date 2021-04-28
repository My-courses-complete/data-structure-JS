class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    newNode.prev = firstPointer;

    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      console.error("index is out of limits of the array");
      return;
    }
    if (index == 1) {
      this.head.next.prev = null;
      this.head = this.head.next;
      this.length--;
      return this;
    }

    const beforePointer = this.getTheIndex(index - 1);
    const currentPointer = this.getTheIndex(index);
    const afterPointer = this.getTheIndex(index + 1);
    afterPointer.prev = beforePointer;
    beforePointer.next = afterPointer;

    this.length--;

    return this;
  }

  getTheIndex(index) {
    let counter = 1;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
