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

  size(){
    let size = 0
    let curNode = this.head
    while (curNode){
      size += 1
      curNode = curNode.next
    }
    return size
  }

  getFirst(){
    return this.head
  }

  getLast(){
    let curNode = this.head
    while(curNode){
      if (curNode.next === null) {
        return curNode
      }
      curNode = curNode.next
    }
  }

  clear(){
    this.head = null
  }

  removeFirst(){
    this.head = this.head.next
  }

  removeLast(){
    // if there are no nodes
    if (this.head === null) return
    let prevNode = this.head
    let node = this.head.next
    // if there is only one node
    if (!this.head.next) {
      this.head = null
      return
    }

    while(node.next){
      prevNode = node
      node = node.next
    }
    prevNode.next = null
  }

  insertLast(data){
    let newNode = new Node(data)
    let curNode = this.head
    while (curNode) {
      if (curNode.next === null){
        curNode.next = newNode
        return
      }
      curNode = curNode.next
    }
  }

  getAt(integer){
    if (!this.head) return null

    if (this.size() < integer) {
      return null;
    }
    let count = 0
    let curNode = this.head

    while (curNode) {
      curNode = curNode.next
      if (integer === count) {
        return curNode
      }
      count += 1
    }
    return null
  }

  removeAt(integer){
    if (!this.head) {
      return
    }
    if (integer === 0) {
      this.head = this.head.next
      return
    }

    let previous = this.getAt(integer - 1)
    if (!previous || !previous.next) return
    previous.next = previous.next.next
  }



}

module.exports = { Node, LinkedList };
