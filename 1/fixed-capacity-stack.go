package main

import (
	"fmt"
	"os"
)

// push, pop, size, isEmpty
type FixedCapacityStack struct {
	a []string
	n int
}

func (stack *FixedCapacityStack) Push(str string) {
	stack.a = append(stack.a, str)
	stack.n++
}

func (stack *FixedCapacityStack) Pop() string {
	if stack.n == 0 {
		return ""
	}

	e := stack.a[len(stack.a)-1]
	stack.a = stack.a[:len(stack.a)-1]
	stack.n--

	return e
}

func (stack *FixedCapacityStack) Size() int {
	return stack.n
}

func (stack *FixedCapacityStack) IsEmpty() bool {
	return stack.n == 0
}

func main() {
	stack := FixedCapacityStack{
		a: []string{},
		n: 0,
	}

	for i := 1; i < len(os.Args); i++ {
		word := os.Args[i]

		if word != "-" {
			stack.Push(word)
		} else {
			fmt.Println(stack.Pop() + " ")
		}
	}

	fmt.Printf("(%d left on stack)\n", stack.Size())
}
