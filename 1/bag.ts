import { NNode } from "./nnode";

class Bag<T> {
  private first: NNode<T> | undefined;

  add(item: T) {
    const oldFirst = this.first;
    this.first = new NNode(item);
    this.first.next = oldFirst;
  }

  // TODO: implement JS iterator
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
  seeAll(): void {
    for (let current = this.first; current; current = current.next) {
      console.log(current.item);
    }
  }
}

const main = () => {
  const b = new Bag<string>();
  b.add("up");
  b.add("what");
  b.add("world");
  b.add("hello");

  b.seeAll();
};

main();
