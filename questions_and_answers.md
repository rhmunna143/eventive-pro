<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>The JS `let` keyword is generally used to declare a variable. Using this keyword, we can declare a variable and initialize its value later. In the question, the `greeting` variable is declared but not initialized. In the next line, it is initialized or assigned a value `{}` an empty object. So, the output will be an empty object </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>The function is called using an integer value and a string value as arguments. That's why it will be operated as string concatenation. If we want to get sum of two numbers using this function, we have to provide both value as integer. So, the right answer is option `"C"`</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>In the code provided, an array called `food` is defined, and an object `info` is initialized with a property `favoriteFood` that is assigned the value of the first element of the `food` array, which is `'🍕'`.

Then, the code updates the value of `info.favoriteFood to "🍝"`. However, this change does not affect the `food` array in any way. The `food` array remains unchanged, and when we log `food` to the console, it still contains the original elements, resulting in `['🍕', '🍫', '🥑', '🍔']`.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>In the code provided, there is a function `sayHi` that takes a parameter `name`. However, when we call `sayHi() `without providing any argument, the `name `parameter inside the function will be `undefined`. The function still executes and returns a string that includes the name parameter, resulting in `"Hi there, undefined"` being logged to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>The output of the code is `'3'` because the forEach method in JavaScript iterates over each element in the nums array and applies the provided callback function to each element. In this case, the callback function checks if the current element num is truthy or falsy (that is, not equal to 0).</i>

</p>
</details>
