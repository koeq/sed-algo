import { NNode } from "./nnode";

// js iterator:
//
// any object which implements a next method that returns:
// 1. value --> the next value in the iteration
// 2. done  --> flag that indicates if the last value in the sequence has been consumned
//              if value is alongside done: true, it's the iterators return value
//
// consume iterator by repeatedly calling next()

// js generators:
//
// alternative to iterators
// allow to define an iterative algorithm by writing a function whose execution is not continuous
// written using the 'function*' syntax
// when called, do not initially execute the code -> return a sepcial type of iterator called generator
// when value is consumed by calling the generators next method, the generator function executes until
// it encounters the yield keyword

// js iterables:
//
// an object is iterable if it defines its iteration behavior, such as what values are looped over
// in a "for...of" construct.
//
// in order to be iterable an object must implement the @@iterator method
// this means that the object (or one of the objects up its prototype chain) must have a property with
// a "Symbol.iterator" key

// Connection:
// Iterables are objects that can be iterated over by implementing a Symbol.iterator method that returns an iterator object.

class Bag<T> {
  #first: NNode<T> | undefined;

  add(item: T) {
    const oldFirst = this.#first;
    this.#first = new NNode(item);
    this.#first.next = oldFirst;
  }

  // TODO: implement JS iterator
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
  seeAll(): void {
    for (let current = this.#first; current; current = current.next) {
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
