export class Stack<T> {
  private a: T[];
  private n: number;

  constructor() {
    this.a = [];
    this.n = 0;
  }

  push(item: T): void {
    this.n++;
    this.a.push(item);
  }

  pop(): T | undefined {
    if (this.n === 0) return;
    this.n--;
    return this.a.pop();
  }

  size(): number {
    return this.n;
  }

  isEmtpy(): boolean {
    return this.n === 0;
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

  console.log(`(${stack.size()} left on stack)`);
};

main();
