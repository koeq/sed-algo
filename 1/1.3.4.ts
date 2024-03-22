import { Stack } from "./fixed-capacity-stack";

const map: Record<string, string> = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const isClosing = (s: string) => s === ")" || s === "]" || s === "}";

const main = () => {
  const stack = new Stack<string>();
  const inputString = process.argv[2];

  for (const char of inputString) {
    if (!isClosing(char)) {
      stack.push(map[char]);
    } else {
      if (char !== stack.pop()) return false;
    }
  }

  return stack.isEmpty();
};

console.log(main());
