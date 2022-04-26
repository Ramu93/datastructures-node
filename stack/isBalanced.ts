// import {AStack} from "./ArrayBasedStack";
import {LStack} from "./ListBasedStack";

export function isBalanced(input: string) {
  let result = false

  // const stack = new AStack()
  const stack = new LStack()

  for (let i = 0; i < input.length; i++) {
    const str = input.charAt(i)
    if(['{', '[', '('].includes(str)) {
      // push all opening brackets
      stack.push(str)
    } else {
      // on encountering a closing bracket
      // stack should not be empty
      // break loop and return false if empty
      if(stack.size() === 0) {
        result = false
        break
      }

      // pop the top element on reading a closing bracket
      const popped = stack.pop()
      if(matchCase(str) === popped) {
        // check if the popped element is a matching pair
        // set true
        result = true
      } else {
        // popped element does not match with the closing bracket
        // set the result to false and break the loop
        result = false
        break
      }
    }
  }

  //stack should be empty at the end
  if(stack.size() > 0) {
      result = false
  }

  return result
}


function matchCase(str: string) {
  switch(str) {
    case '}':
      return '{'
    case ']':
      return '['
    case ')':
      return '('
    default:
      return undefined
  }
}
