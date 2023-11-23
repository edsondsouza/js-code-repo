The `new` keyword in JavaScript is used to create an instance of a constructor function or a class. When you use `new` with a function, it creates a new object and sets the `this` keyword to refer to that newly created object within the function.

Here's a typical example using a constructor function:

```javascript
function Person(name) {
  this.name = name;
}

// Creating an instance using the 'new' keyword
let john = new Person('John');
console.log(john.name); // Output: John
```

When `new Person('John')` is executed:

1. A new empty object is created.
2. The `this` keyword inside the `Person` function refers to this newly created object.
3. Properties or methods are added to this object using `this`.
4. Finally, the newly created object is returned.

The `new` keyword in JavaScript essentially helps in the process of creating new instances of objects constructed by a function or a class. It's not a constructor function itself but is used in conjunction with constructor functions to create instances.