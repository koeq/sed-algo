export class Stack<T> {
  private a: T[];
  private size: number;

  constructor() {
    this.a = [];
    this.size = 0;
  }

  push(item: T): void {
    this.size++;
    this.a.push(item);
  }

  pop(): T | undefined {
    if (this.size === 0) return;
    this.size--;
    return this.a.pop();
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

const main = () => {
  const stack = new Stack();
  const args = process.argv.slice(2);

  for (const arg of args) {
    if (arg !== "-") {
      stack.push(arg);
    } else {
      process.stdout.write(`${stack.pop()} `);
    }
  }
  process.stdout.write("\n");

  console.log(`(${stack.getSize()} left on stack)`);
};

// main();
