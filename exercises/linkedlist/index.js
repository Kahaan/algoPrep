// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(node, head = null){
    this.node = node
    this.head = head
  }
}

module.exports = { Node, LinkedList };
