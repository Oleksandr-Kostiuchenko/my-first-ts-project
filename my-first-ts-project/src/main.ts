import "./style.css";

//TODO: ============================ TASK RECTANGLE ============================
// class Rectangle {
//   constructor(height: number, width: number) {
//     this.height = height;
//     this.width = width;
//   }
//   calcArea = () => {
//     return this.height * this.width;
//   };
//   get area() {
//     return console.log(this.calcArea());
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square);
// square.area;

// console.log("-------------------------------------------------");
//TODO: ============================ /TASK RECTANGLE ============================

//TODO: ============================ TASK USER ============================
// type userData = {
//   firstName: string;
//   secondName: string;
//   age: number;
// };

// class User {
//   constructor(user: userData) {
//     this.firstName = user.firstName;
//     this.secondName = user.secondName;
//     this.age = user.age;
//   }
//   welcomeUser = () => {
//     return console.log(`Welcome ${this.firstName}! Nice to see you.`);
//   };
//   getUserInfo = () => {
//     return console.log(
//       `First name: ${this.firstName}, Second name: ${this.secondName}, Age: ${this.age}`
//     );
//   };
// }

// const alex = new User({
//   firstName: "Alex",
//   secondName: "Kostiuchenko",
//   age: 14,
// });

// alex.welcomeUser();
// alex.getUserInfo();
//TODO: ============================ /TASK USER ============================

//TODO: ============================ TASK 1 ============================
// type BookData = {
//   title: string;
//   author: string;
//   pages: number;
//   price: number;
// };

// const describeBook = (bookObj: BookData) => {
//   console.log(`----------------------------`);
//   console.log(`Book name: ${bookObj.title}`);
//   console.log(`Author: ${bookObj.author}`);
//   console.log(`Total pages: ${bookObj.pages}`);
//   console.log(`Price: ${bookObj.price}$`);
//   console.log(`----------------------------`);
// };

// describeBook({
//   title: "Atomic habits",
//   author: "James Clear",
//   pages: 220,
//   price: 30,
// });
//TODO: ============================ /TASK 1 ============================

//TODO: ============================ TASK 2 ============================
// interface EmployeeData {
//   fullName: string;
//   position: string;
//   isFullTime: boolean;
//   monthSalary?: number;
// }

// const printEmployeeInfo = (employeeObj: EmployeeData): string => {
//   return `First name: ${employeeObj.fullName.split(" ")[0]} | Second name: ${
//     employeeObj.fullName.split(" ")[1]
//   } | Position: ${employeeObj.position} | ${
//     employeeObj.isFullTime ? "Full-time" : "Part-time"
//   } | ${
//     employeeObj.monthSalary ? `Month salary: ${employeeObj.monthSalary}` : ``
//   }`;
// };

// console.log(
//   printEmployeeInfo({
//     fullName: "Alex Kostiuk",
//     position: "Junior Frontend Dev",
//     isFullTime: false,
//     monthSalary: 2000,
//   })
// );
//TODO: ============================ /TASK 2 ============================

//TODO: ============================ TASK 3 ============================
// const generateRandomArr = (quantity: number): number[] => {
//   const randomArr = [];

//   for (let i = 0; i <= quantity; i++) {
//     randomArr.push(Math.ceil(Math.random() * 100));
//   }

//   return randomArr;
// };

// const findMax = (numsArr: number[]): number => {
//   let maxNum = 0;

//   for (let i = 0; i <= numsArr.length; i++) {
//     if (numsArr[i] > numsArr[i - 1]) {
//       maxNum = numsArr[i];
//     }
//   }

//   return maxNum;
// };

// const randomArr = generateRandomArr(10);
// console.log(`Numbers: ${randomArr} Biggest num: ${findMax(randomArr)}`);
//TODO: ============================ /TASK 3 ============================

//TODO: ============================ TASK 4 ============================
// const debugValue = (data: any): void => {
//   console.log(data);
//   console.log(!!data);
// };

// debugValue(5);
// debugValue(undefined);
// debugValue([
//   { name: "Alex", age: 25 },
//   { name: "Poly", age: 15 },
// ]);
//TODO: ============================ /TASK 4 ============================

//TODO: ============================ TASK 5 ============================
// const validateFeedBack = (feedback: unknown) => {
//   if (typeof feedback === "string") {
//     return {
//       feedback: feedback,
//       length: feedback.length,
//       isValid: feedback.length > 10,
//       isPositive: feedback.length > 15,
//     };
//   } else if (typeof feedback === "number") {
//     return {
//       feedback: feedback,
//       isValid: feedback >= 0 && feedback <= 10,
//       isPositive: feedback > 5,
//     };
//   } else {
//     return null;
//   }
// };

// console.log(validateFeedBack("Nice community! Enjoyed this collab."));
// console.log(validateFeedBack(10));
//TODO: ============================ /TASK 5 ============================

//TODO: ============================ TASK 6 ============================
// enum PaymentStatus {
//   Pending = "in progress",
//   Completed = "completed",
//   Failed = "rejected",
// }

// type PaymentData = {
//   value: number;
//   status: PaymentStatus;
// };

// const getStatusMessage = (transcation: PaymentData): string => {
//   if (transcation.status === PaymentStatus.Pending) {
//     return `Wait a moment... Your transcation (${transcation.value}USD) is ${PaymentStatus["Pending"]}`;
//   } else if (transcation.status === PaymentStatus.Completed) {
//     return `Success! Your transcation (${transcation.value}USD) is ${PaymentStatus["Completed"]}`;
//   } else if (transcation.status === PaymentStatus.Failed) {
//     return `Error! Your transcation (${transcation.value}USD) is ${PaymentStatus["Failed"]}`;
//   } else {
//     return `Transaction ${transcation.value} USD`;
//   }
// };

// console.log(
//   "--------------------",
//   getStatusMessage({
//     value: 2000,
//     status: PaymentStatus.Completed,
//   }),
//   "--------------------"
// );
// console.log(
//   "--------------------",
//   getStatusMessage({
//     value: 500,
//     status: PaymentStatus.Failed,
//   }),
//   "--------------------"
// );
// console.log(
//   "--------------------",
//   getStatusMessage({
//     value: 100,
//     status: PaymentStatus.Pending,
//   }),
//   "--------------------"
// );
//TODO: ============================ /TASK 6 ============================

//TODO: ============================ TASK 7 ============================
// const handleAction = (
//   type: "start" | "stop" | "pause",
//   role: "admin" | "editor" | "viewer"
// ): string => {
//   if (role === "admin") {
//     console.log("Admin has full access to perform this action.");
//   } else if (role === "editor") {
//     console.log("Editor can modify this action.");
//   } else if (role === "viewer") {
//     console.log("Viewer can only view this action.");
//   } else {
//     return "";
//   }

//   if (type === "start") {
//     console.log("Action started");
//     return "Action started";
//   } else if (type === "stop") {
//     console.log("Action stopped");
//     return "Action stopped";
//   } else if (type === "pause") {
//     console.log("Action paused");
//     return "Action paused";
//   } else {
//     return "";
//   }
// };

// handleAction("start", "admin");
// console.log("-----------------------------");
// handleAction("pause", "editor");
// console.log("-----------------------------");
// handleAction("stop", "viewer");
//TODO: ============================ /TASK 7 ============================

//TODO: ============================ TASK 8 ============================
// const terminateProgram = (): never => {
//   throw new Error("404. Something went wrong!");
// };

// console.log(terminateProgram());
//TODO: ============================ /TASK 8 ============================
