// Write a function that determines if a string containing only brackets/parentheses/braces({, }, (, ), [, ]) is valid.
//  A string is considered valid if:1. All brackets must be closed in the correct order2. 
// Each closing bracket must have a corresponding opening bracket of the 
// same typeExamples:- "()"      => true- "()[]{}"  => true- "(]"      => false- "([)]"    => false- "{[]}"    => true

function balancedParathesis(str){
    const stack = []
    const pairs = {
        ')' :'(',
        ']' : '[',
        '}' : '{'
    }

    for(let char of str){
        if(char === '(' || char ==='{' || char ==='['){
            stack.push(char)
        }else if(char === ')' || char ==='}' || char ===']'){
            // stack.pop()
            if(stack.length === 0 || stack.pop() !== pairs[char]){
                return false
            }
        }
    }

    return stack.length === 0
}

console.log(balancedParathesis('()[]{}'));
console.log(balancedParathesis('([)]'));
console.log(balancedParathesis('((((((((('));
