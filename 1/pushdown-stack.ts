class NNode<T> {
  item: T;
  next: NNode<T> | null;

  constructor(item: T) {
    this.item = item;
    this.next = null;
  }
}

class Stack<T> {
  private first: NNode<T> | null = null;
  private size: number = 0;

  isEmpty(): boolean {
    return this.first === null;
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

  pop(): T | null {
    if (!this.first) return null;

    let item = this.first.item;
    this.first = this.first.next;
    this.size--;

    return item;
  }
}