import { Stack } from "./fixed-capacity-stack";

const map: Record<string, string> = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const isClosing = (s: string) => s === ")" || s === "]" || s === "}";

const main = () => {
  const stack = new Stack<string>();
  const args = process.argv.slice(2);

  for (const arg of args) {
    stack.push(arg);
  }

  const closing = new Stack<string>();

  while (!stack.isEmtpy()) {
    let curr = stack.pop()!;

    if (isClosing(curr)) {
      closing.push(curr);
      continue;
    }

    if (map[curr] !== closing.pop()) return false;
  }

  return stack.getSize() === 0 && closing.getSize() === 0;
};

console.log(main());
