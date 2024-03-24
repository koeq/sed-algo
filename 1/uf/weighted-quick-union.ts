import fs from "fs";
import readline from "readline";

const FILE_PATH = `${__dirname}/largeUF.txt`;

class WeightedQuickUnion {
  #id: number[] = [];
  #sz: number[] = [];
  #count: number;

  constructor(N: number) {
    this.#count = N;

    for (let i = 0; i < N; i++) {
      this.#id[i] = i;
      this.#sz[i] = 1;
    }
  }

  getCount(): number {
    return this.#count;
  }

  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }

  find(p: number): number {
    while (p !== this.#id[p]) p = this.#id[p];
    return p;
  }

  union(p: number, q: number): void {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) return;

    if (this.#sz[pRoot] < this.#sz[qRoot]) {
      this.#id[pRoot] = qRoot;
      this.#sz[qRoot] += this.#sz[pRoot];
    } else {
      this.#id[qRoot] = pRoot;
      this.#sz[pRoot] += this.#sz[qRoot];
    }

    this.#count--;
  }
}

async function main() {
  let N = 0;
  let uf: WeightedQuickUnion | undefined;
  const fileStream = fs.createReadStream(FILE_PATH);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let lineCount = 0;

  for await (const line of rl) {
    lineCount++;

    if (lineCount === 1) {
      N = parseInt(line);
      uf = new WeightedQuickUnion(N);
      continue;
    }

    const splitted = line.split(" ");
    const p = parseInt(splitted[0]);
    const q = parseInt(splitted[1]);

    if (uf?.connected(p, q)) continue;
    uf?.union(p, q);
    console.log(`${p} ${q}`);
  }

  console.log(`${uf?.getCount()} components`);

  rl.close();
}

main();
