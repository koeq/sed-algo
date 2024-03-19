export class NNode<T> {
  item: T;
  next: NNode<T> | undefined;

  constructor(item: T) {
    this.item = item;
    this.next = undefined;
  }
}
