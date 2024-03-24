class UF {
  #id: number[] = [];
  #count: number;

  constructor(N: number) {
    this.#count = N;

    for (let i = 0; i < N; i++) {
      this.#id[i] = i;
    }
  }

  getCount(): number {
    return this.#count;
  }

  find(p: number) {}
  union(p: number, q: number) {}
}
