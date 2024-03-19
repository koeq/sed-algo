import { NNode } from "./nnode";

class Stack<T> {
  private first: NNode<T> | undefined;
  private size: number = 0;

  isEmpty(): boolean {
    return this.first === undefined;
  }

  getSize(): number {
    return this.size;
  }

  push(item: T): void {
    let oldFirst = this.first;
    this.first = new NNode(item);
    this.first.next = oldFirst;
    this.size++;
  }

  pop(): T | undefined {
    if (!this.first) return;

    let item = this.first.item;
    this.first = this.first.next;
    this.size--;

    return item;
  }
}
