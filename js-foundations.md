# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
6 primitive data types in js 
numbers,strings,booleans, undefined,null,symbol
We also have objects and arrays which are an abstract data types

2. What's the difference between =, ==, and === in JavaScript?
 = is the assign operator
== checks for non strict equality and === checks for a strict equality 
same value and same data type

3. What is the difference between an array's index and length?
the array length is the number of items inside of the array the index starts from 0 and is the position of the element 
for example an array with 5 items will have a length of 5 and the last index would be 4

4. What are the three parts of a for loop?
 the i variable or whatever we ant to name it 
the logical condition of the array until when it runs i <arr.length
how much do we increment the array after each loop i++

5. What is a function's declaration, argument, and call?
a function decleration is the function code in itself that we write
    function name () {
    
    }
the function call is how we use the function that we just declared arr.name()

an argument is how we refer the data we passed to the function 

6. What are the three main steps in saving work to github?
 add, commit and push 

7. What is the terminal command to move directories?

8. Do you have a suggestion for a Check In question?
No

9. What was your favorite topic this week?
higher order functions

10. What was your "A-ha!" moment this week?
When I read the official react documentation and understood what is this.state

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()

returns undefined because we dont have a return statement
```


2. What is JSON? How does it relate to javascript objects?
Javascript object notation , it is a way to send data as a js object 
3. Describe a closure, what is it good for and how do you recognize one?
its the closing of a function  not really sure what exactly it is 
