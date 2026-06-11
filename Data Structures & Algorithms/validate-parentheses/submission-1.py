class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpen = {')': '(', ']': '[', '}': '{'}
        for c in s:
            # If its a opening brace, add to the stack
            if c not in closeToOpen:
                stack.append(c)
            # If the length of the stack is less than one
            # or the last bracket in stack not equal to opening brace
            # return False
            elif len(stack) < 1 or closeToOpen[c] != stack[-1]:
                return False
            # If its a closing brace, pop from the stack
            else:
                stack.pop()
        # Check if the stack is empty and return True if it is, otherwise False
        return len(stack) == 0