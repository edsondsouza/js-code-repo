// const coding = ['js', 'rb', 'java', 'py', 'cpp']

// const values = coding.forEach((language)=> {
//     // console.log(language)
//     return language
// })

// console.log(values)
// forEach does not return you anything

// Case1 => filter
const mynumber = [1,2,3,4,5,6,7,8,9,10]

// const values = mynumber.filter((num) => num > 4)
// const values = mynumber.filter((num) => (num > 4))
// const values = mynumber.filter((num) => {
//     return num > 4
// })

// Case2 => using the same above concept in forEach
// const values = []
// mynumber.forEach((num)=>{
//     if (num > 4) {
//         values.push(num)
//     }
// })
// console.log(values)

/* dekho both case 1 and case 2 exact similar kaam karta hei. Haan efficiency matter karega lekhin at the end of the day hamhe output milna hei. Efficiency ham DSA mei baat karenge. In mei se koi bhi case select karo farak nain padtah. */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   using filter
//   const userBook = books.filter((book) => book.genre === 'History')

// using forEach
//   const userBook = [];
//   books.forEach((bk) => {
//     if (bk.genre === "History") userBook.push(bk)
//   })
//   console.log("Using forEach loop")
//   console.log(userBook)

const userBook = books.filter((bk) => {
    return bk.publish >= 1992 && bk.genre === "History"
})

// console.log(userBook)