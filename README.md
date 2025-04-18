### Task 1: Basic Types in TypeScript✅

Create a TypeScript function named `describeBook` that takes a book object as an argument. The book object should have the following properties: `title` (string), `author` (string), and `pages` (number). The function should return a string describing the book.

---

### Task 2: Object Typisation in TypeScript✅

Create a TypeScript function named `printEmployeeInfo` that takes an employee object with the following properties: `name` (string), `position` (string), and `isFullTime` (boolean). The function should return a formatted string with the employee's information.

---

### Task 3: Array Typisation in TypeScript✅

Write a TypeScript function named `findMax` that takes an array of numbers and returns the largest number in the array. The function should only accept arrays of numbers.

---

### Task 4: Using the `any` Type in TypeScript✅

Create a TypeScript function named `debugValue` that takes a single parameter of type `any`. The function should log the value and mention whether it's truthy or falsy.

---

### Task 5: Using the `unknown` Type in TypeScript✅

Task 5: Validating and Processing User Input FeedBack
Write a TypeScript function named processInput that accepts an input of type unknown. The function should:

Check if the input is a string:
If it is, return an object with the string's length and a message confirming it's a valid string (min 10 letters for a feedback) and positiveor negative.
If the input is a number:
Return an object with the number's value and a message confirming it's a valid number (1/10) and positive or negative.
For any other type, return null.

---

### Task 6: Understanding Enums in TypeScript✅

Define a TypeScript enum named `PaymentStatus` with members: `Pending`, `Completed`, and `Failed`. Then, create a function `getStatusMessage` that takes a `PaymentStatus` and returns a user-friendly message.

---

### Task 7: Exploring Union Types in TypeScript✅

Task 7: Handling Commands and User Roles with Literal Types
Write a TypeScript function named handleAction that accepts two parameters:

command: A parameter of type "start" | "stop" | "pause".
role: A parameter of type 'admin' | 'editor' | 'viewer'.
The function should:

Based on the command, return a specific response string:
"start": "Action started"
"stop": "Action stopped"
"pause": "Action paused"
Additionally, log a message based on the role:
'admin': "Admin has full access to perform this action."
'editor': "Editor can modify this action."
'viewer': "Viewer can only view this action."

---

### Task 9: Return Types in TypeScript✅

Create a TypeScript function named `calculateDiscount` that takes a `price` (number) and a `discountRate` (number) and returns the discounted price. Explicitly annotate the return type.

---

### Task 10: Void Types in TypeScript✅

Create a TypeScript function named `notifyUser` that takes a message string and logs it to the console. The function should have a return type of `void`.

---

### Task 11: Never Type in TypeScript

Write a function named `terminateProgram` that throws a fatal error with a given message. The function should use the `never` type to indicate it doesn’t return normally.

---

### Task 12: Optional Parameters in an Interface✅

Create an interface `BlogPost` with the properties: `title` (string), `content` (string), and an optional `tags` (array of strings). Write a function `showPostSummary` that takes a `BlogPost` object and displays a summary.

---

### Task 13: Method in an Interface

Define a TypeScript interface called `Greeter` that includes a method `greet` accepting a name (string) and returning a greeting (string). Implement a class `FriendlyGreeter` that uses this interface.
