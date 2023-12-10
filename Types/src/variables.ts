//Typescript variable annotation
//Syntax - let variableName : type = value;

export {};
let myFavMovie: string = "Iron Man";
myFavMovie = "Iron Man 2";
myFavMovie = "Iron Man 3";
console.log(myFavMovie);
// myFavMovie = 9;

//we can not assign any other type value to given value as typescript follows strict value assignment
//like for number we can not assign value of string as we can do in javascript

//Type Inference is nothing but typescript compilers ability to remember a value's type even if i didn't provide any type
//annotation to that value (infers a type of a value)

//Q. What all types do we have in typescript?
/*TypeScript, a superset of JavaScript, introduces static typing to the language. Here are some of the basic types available in TypeScript:

1. Boolean:
   - `let isDone: boolean = false;`

   2. Number:
   - `let decimal: number = 6;`

3. String:
   - `let color: string = "blue";`

4. Array:
   - `let list: number[] = [1, 2, 3];`
   - `let fruits: Array<string> = ['apple', 'banana', 'orange'];`

5. Tuple:
   - `let x: [string, number] = ['hello', 10];`

6. Enum:
   - `enum Color {Red, Green, Blue};`
   - `let c: Color = Color.Green;`

7. Any:
   - `let notSure: any = 4;`
   - `let list: any[] = [1, true, "free"];`

8. Void:
   - `function warnUser(): void { console.log("This is a warning"); }`

9. Null and Undefined:
   - `let u: undefined = undefined;`
   - `let n: null = null;`

10. Never:
   - Represents the type of values that never occur (e.g., a function that always throws an exception).
   - `function throwError(message: string): never { throw new Error(message); }`

11. Object:
   - Represents any non-primitive type.
   - `let obj: object = { key: 'value' };`

12. Union Types:
   - `let value: number | string;`

13. Intersection Types:
   - `type Point = { x: number } & { y: number };`

14. Literal Types:
   - `let status: "success" | "error";`

15. Type Assertions:
   - `<string>someValue` or `someValue as string`

These are just the basic types, and TypeScript also supports more advanced features such as generics, interfaces, classes, and more. Using these types helps catch errors during development and improves code maintainability. */
