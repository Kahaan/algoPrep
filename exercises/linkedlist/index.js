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

  constructor(head = null){
    this.head = head
  }

  insertFirst(data){
    const node = new Node(data, this.head)
    this.head = node
  }

}

module.exports = { Node, LinkedList };
