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

  insertLast(Data){
    newNode = new Node(Data)
    curNode = this.head
    while (curNode) {
      if (curNode.next === null){
        curNode.next = newNode
        return
      }
      curNode = curNode.next
    }
  }

}

module.exports = { Node, LinkedList };
