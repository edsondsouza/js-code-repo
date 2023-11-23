// url
// https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we#:~:text=Please%20use%20native%20promises%20instead,please%20consider%20native%20promises%20first.

// Promise has two steps
// 1) Creating the promise
// 2) Consuming the promise

// creating the promises
const promiseOne = new Promise(function (resolve, reject) {
// Do an async task
// DB call, cryptography, network
  setTimeout(function () {
    console.log(`Async code executed`);
    resolve();
  }, 1000);
});

// consume the promise
promiseOne.then(function () {
  console.log("Resolve executed");
});

// Promise is a object. iss promise ko use karne k liye, yek variable mai hold karsakte ho ya use karsakte ho without using a variable

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("code executed");
});

// data consumption in Promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
// resolve mei jab bhi data ati hai vo "object" k form mei most of the time aati hai
    resolve({ username: "Edson", email: "edson@example.com" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data);
});

// callback hell
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let result = true;
    if (!result) {
      resolve({ username: "Edson", age: 21 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(function () {
    console.log(
      "This code will executed even is the request is resolved or rejected"
    );
  });

// async-await => The main issue with async-await is, it does not handle error by default. Therefore we need to use try-catch
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let result = false;
    if (result) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("Rejected");
    }
  }, 1000);
});

async function handlePromiseFive() {
  try {
    const waitingForPromiseFive = await promiseFive;
    console.log(waitingForPromiseFive);
  } catch (error) {
    console.log(error);
  }
}
handlePromiseFive()

async function getUser() {
  try {
    const response = await fetch("https://api.github.com/users/edsondsouza")
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getUser();

fetch("https://api.github.com/users/edsondsouza")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

// fetch documentation
// https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples