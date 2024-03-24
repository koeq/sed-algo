import fs from "fs";
import readline from "readline";

const FILE_PATH = `${__dirname}/largeUF.txt`;

class UF {
  #id: number[] = [];
  #count: number;

  constructor(N: number) {
    this.#count = N;

    for (let i = 0; i < N; i++) {
      this.#id[i] = i;
    }
  }

  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }

  getCount(): number {
    return this.#count;
  }

  // QUICK FIND
  // 1
  // find(p: number): number {
  //   return this.#id[p];
  // }

  //  -> between n + 3 and 2n + 1
  // union(p: number, q: number): void {
  //   // 2
  //   const pId = this.find(p);
  //   const qId = this.find(q);

  //   if (pId === qId) return;

  //   for (let i = 0; i < this.#id.length; i++) {
  //     // n
  //     if (this.#id[i] === qId) {
  //       // min: 1; max: n - 1
  //       this.#id[i] = pId;
  //     }
  //   }

  //   this.#count--;
  // }

  // QUICK UNION
  find(p: number): number {
    while (p !== this.#id[p]) p = this.#id[p];
    return p;
  }

  union(p: number, q: number) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) return;
    this.#id[pRoot] = qRoot;
    this.#count--;
  }
}

async function main() {
  let N = 0;
  let uf: UF | undefined;
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
      uf = new UF(N);
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
