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

  // 1.3.20
  delete(k: number): T | undefined {
    if (this.#size === 0 || k < 0 || k >= this.#size) return;

    let curr = this.#first;
    let prev: NNode<T> | undefined;

    if (k === 0) {
      const deletedItem = curr!.item;
      this.#first = curr!.next;
      this.#size--;

      return deletedItem;
    }

    for (let i = 0; curr && i < k; i++) {
      prev = curr;
      curr = curr.next;
    }

    if (!curr) return;

    prev!.next = curr.next;
    this.#size--;

    return curr.item;
  }

  *[Symbol.iterator]() {
    let curr = this.#first;

    while (curr) {
      yield curr.item;
      curr = curr.next;
    }
  }
}

// 1.3.21
const find = <T>(item: T, list: LinkedList<T>): boolean => {
  for (const listItem of list) {
    if (listItem === item) return true;
  }

  return false;
};

const removeAfter = <T>(node: NNode<T>) => {
  node.next = node.next?.next;
};

const insertAfter = <T>(first: NNode<T>, second: NNode<T>) => {
  second.next = first.next;
  first.next = second;
};

// const max = (node: NNode<number> | undefined): number => {
//   if (!node) return Number.MIN_SAFE_INTEGER;

//   const maxRest = max(node.next);

//   return Math.max(node.item, maxRest);
// };

const maxSecondParameter = (
  node: NNode<number> | undefined,
  max: number = Number.MIN_SAFE_INTEGER
) => {
  if (!node) return max;
  if (node.item > max) max = node.item;

  return maxSecondParameter(node.next, max);
};

const reverse = <T>(node: NNode<T> | undefined): NNode<T> | undefined => {
  let first = node;
  let reverse: NNode<T> | undefined;

  while (first) {
    let second = first.next;
    first.next = reverse;
    reverse = first;
    first = second;
  }

  return reverse;
};

// 1 -> 2 -> 3 -> 4 -> undefined
// 4 -> undefined
// 4 -> 3 -> undefined
// 4 -> 3 -> 2 -> undefined
// 4 -> 3 -> 2 -> 1 -> undefined
const reverseRecursive = <T>(
  first: NNode<T> | undefined
): NNode<T> | undefined => {
  if (!first) return;
  if (!first.next) return first;

  let second = first.next;
  let newFirst = reverseRecursive(second);
  second.next = first;
  first.next = undefined;

  return newFirst;
};

const main = () => {
  const linked = new LinkedList();
  linked.add(0);
  linked.add(1);
  linked.add(2);
  linked.add(3);

  // linked.delete(3);
  // console.log(find(2, linked));

  for (const item of linked) {
    console.log(item);
  }
};

main();
