import { NNode } from "./nnode";

class LinkedList<T> {
  #first: NNode<T> | undefined = undefined;
  #size: number = 0;

  #getLastNode(): NNode<T> | undefined {
    let curr = this.#first;

    while (curr?.next) {
      curr = curr.next;
    }

    return curr;
  }

  add(item: T) {
    const newNode = new NNode(item);
    if (this.#size === 0) {
      this.#first = newNode;
    } else {
      this.#getLastNode()!.next = newNode;
    }
    this.#size++;
  }

  *[Symbol.iterator]() {
    let curr = this.#first;

    while (curr) {
      yield curr.item;
      curr = curr.next;
    }
  }
}

const main = () => {
  const linked = new LinkedList();
  linked.add(0);
  linked.add(1);
  linked.add(2);
  linked.add(3);

  for (const item of linked) {
    console.log(item);
  }
};

main();
