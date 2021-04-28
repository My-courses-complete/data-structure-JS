// 1-- > 2-- > 3-- > 4-- > 5-- > null;

// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: {
//             value: 5,
//             next: {
//               value: null,
//             },
//           },
//         },
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyListkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (inex >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      console.error("index is out of limits of the array");
      return;
    }
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    const beforePointer = this.getTheIndex(index - 2);
    const afterPointer = this.getTheIndex(index);
    beforePointer.next = afterPointer;

    this.length--;

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myLinkedList = new MySinglyListkedList(1);
