class NNode<T> {
  item: T;
  next: NNode<T> | undefined;

  constructor(item: T) {
    this.item = item;
    this.next = undefined;
  }
}

// <- . . . <-
class Queue<T> {
  first: NNode<T> | undefined;
  last: NNode<T> | undefined;
  size: number = 0;

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return !this.first;
  }

  enqueue(item: T) {
    const oldLast = this.last;
    this.last = new NNode(item);

    // list was empty
    if (!oldLast) {
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }

    this.size++;
  }

  dequeue(): T | undefined {
    const oldFirst = this.first;

    if (!oldFirst) return;

    this.first = oldFirst.next;
    oldFirst.next = undefined;
    this.size--;

    if (this.isEmpty()) this.last = undefined;

    return oldFirst.item;
  }
}
