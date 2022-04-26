import {Stack} from "./Stack";

// Linked list implementation of stack
export class LStack implements Stack{

  top: Node | null | undefined = null
  stackSize: number = 0

  peek(): string | undefined {
    return this.top?.value;
  }

  pop(): string | undefined {
    // create an element as the value has to be returned on pop operation
    const value = this.top?.value
    // set the top element to the element next to top
    this.top = this.top?.link
    // decrease the stack size
    this.stackSize--
    // return the popped value
    return value;
  }

  push(value: string): void {
    // create a node
    const node: Node = {value, link: null}

    if(!this.top) {
      // if the top is null set the node to top
      this.top = node
    } else {
      // if top element exists
      // set the link of the current node to top
      node.link = this.top
      // set current node as top element
      this.top = node
    }
    // increment the size of the stack
    this.stackSize++
  }

  size(): number {
    return this.stackSize
  }
}

export type Node = {
  value: string
  link: Node | null | undefined
}
