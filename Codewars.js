   /*Unexpected parsing
************************************************************************
function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return 
    {
      status: msg
    }
  }
  */
   // Решение:
   //  1.
        function getStatus(isBusy) {
        var msg = (isBusy ? "busy" : "available");
        return {status: msg}
        }
   //   2.
        let getStatus = isBusy => ({ status: isBusy ? 'busy' : 'available' });


    //  Find out whether the shape is a cube
// ******************************************************************************************
/*DESCRIPTION:
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
*/
   // Решение:
        var cubeChecker = function(volume, side){
        
            if(volume <= 0 || side <= 0){
            return false;
            }
            if(volume === side **3){
            return true;
            }else{
            return false;
            }
        };
        

   // Counting sheep...
// **********************************************************************
/*DESCRIPTION:
Consider an array/list of sheep where some sheep may be
 missing from their place. We need a function that counts 
 the number of sheep present in the array 
 (true means present).
 [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
 */
   //Решение:          
          function countSheeps(arrayOfSheep) {
  
           var sheep = 0;
            for (var i = 0; i < arrayOfSheep.length; i++)
            if(arrayOfSheep[i] == true)
                sheep++;
            return sheep;
          } 
              

    // Function 1 - hello world    
    // **********************************************************************           
/* Make a simple function called greet that returns the most-famous "hello world!".
Style Points
Sure, this is about as easy as it gets. 
But how clever can you be to create the most creative 
"hello world"you can think of? What is a "hello world" 
solution you would want to show your friends?*/
   // Решение:
            function greet(){
                return "hello world!"
            }


    /*Classy Extensions
    // **********************************************************************
  Classy Extensions, this kata is mainly aimed at the new JS ES6
  Update introducing extends keyword. You will be preloaded with 
  the Animal class, so you should only edit the Cat class.
  Task
  Your task is to complete the Cat class which Extends Animal 
  and replace the speak method to return the cats name + meows. e.g.
   'Mr Whiskers meows.' */
   // Решение:
        class Cat extends Animal {
            speak(){
            return this.name + " meows";
            }
        }

           // ASCII Total
// ********************************************************************************
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291
   // Решение:
      function uniTotal (string) {

        var count = 0;
        for(let i = 0; i < string.length; i++){
        count = count + string.charCodeAt(i);
        }
        return count;
    }

   /*Century From Year
********************************************************************************
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/
   // Решение:
   function century(year) {

    return Math.ceil(year/100);
  }

  /*Terminal Game - Create Hero Prototype
 ******************************************************************************************
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	    user argument or 'Hero'
position	'00'
health	    100
damage	    5
experience	0
*/
   // Решение:
      function Hero (name = "Hero") {

        this.name = name
        this.position = "00"
        this.health = 100
        this.damage = 5
        this.experience = 0
    }

   /* Grasshopper - Summation
******************************************************************************************
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/
   // Решение:
      var summation = function (num) {
        
        let sum = 0;
        for (let i = 0; i <= num; i++){
          sum = sum + i;
        }
        return sum;
      }

     /* Fun with ES6 Classes #1 - People, people, people
     ******************************************************************************************
     Define a class Person with the following properties:

A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), 
lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) 
and gender/Gender (defaults to "Male" if not set).
 These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, 
 this.age/this.Age and this.gender/this.Gender respectively.
A method sayFullName/SayFullName that accepts no arguments and returns the full name 
(e.g. "John Doe")
A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts 
one parameter raceName and returns "Welcome to Planet Earth raceName". For example, 
if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
You may use any valid syntax you like; however, it is highly recommended that you 
complete this Kata using ES6 syntax and features.
*/
   // Решение:
      class Person {
      
        constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male"){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
          };
      
        sayFullName(){
          return `${this.firstName} ${this.lastName}`;
          };
      }
      Person.greetExtraTerrestrials = raceName => {
          return `Welcome to Planet Earth ${raceName}`;
        }
  

    /* Chuck Norris VII - True or False? (Beginner)
    *****************************************************************************************
It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

Go show some truth who's boss!
*/
    // Решение:
        function ifChuckSaysSo(){

          return !true
        }


        
   /*ES6 string addition
*****************************************************************************************
It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.
*/
   // Решение:
      function joinStrings(string1, string2){
      
        return `${string1} ${string2}`
      }

     /* Be Concise IV - Index of an element in an array
*****************************************************************************************
Provided is a function find which accepts two parameters
 in the following order: array, element and returns
 the index of the element if found and "Not found" otherwise. 
 Your task is to shorten the code as much as possible in order
  to meet the strict character count requirements of the Kata. 
  (no more than 85) You may assume that all array elements are unique.
  */
     // Решение:
        const find =(a,el) => {return a.indexOf(el)>=0 ? a.indexOf(el):"Not found";}

      /* Unfinished Loop - Bug Fixing #1

Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/
   // Решение:
      function createArray(number){
        var newArray = [];
        
        for(var counter = 1; counter <= number; counter++){
          newArray.push(counter);
        }
        
        return newArray;
      }
  //   *****************************************************************************************

      
    /* The 'if' function

Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/
// Решение:
    const _if = (bool, func1, func2) => console.log(bool ? func1() : func2());
// *****************************************************************************************


    /* Beginner Series #1 School Paperwork
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/
   // Решение:
      function paperwork(n, m) {
        if(n > 0 && m > 0){
          return n * m;
          }
        return 0;
      }
// *****************************************************************************************


    /* Convert a Boolean to a String
DESCRIPTION:
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
*/
    // Решение:
        function booleanToString(b){
        
          if(b) return "true";
          return "false";
        }
 // *****************************************************************************************

   /* Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/
   // Решение:
      function simpleMultiplication(number) {
        
        if(number % 2 == 0){
          return number * 8;
        }
      return number * 9;
      }
 // *****************************************************************************************

    /* Reversed Words
 Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> 
"battle no requires which that is victory greatest The"
*/
   // Решение:
      function reverseWords(str){
        return str.split(` `).reverse().join(` `); 
      }
  // 2 вариант:
      const reverseWords = str => str.split(` `).reverse().join(` `)
 // *****************************************************************************************


      /* Cat years, Dog years
      Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/
   // Решение:
      var humanYearsCatYearsDogYears = function(humanYears) {
        // Your code here!
        if(humanYears == 1){
        return [1,15,15];
        } if(humanYears == 2){
        return [2,24,24];
          }
        return [humanYears, 24 + (humanYears - 2) * 4,
        24 + (humanYears - 2) * 5];
          
      }
 // *****************************************************************************************

    /* Grasshopper - Debug sayHello
 Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock
*/
   // Решение:
      function sayHello(name) {
        return 'Hello' + ", " + name
      }
  // 2 вариант:
      const sayHello = name => `Hello, ${name}`;
// *****************************************************************************************


   /* Convert a String to a Number!
Description
We need a function that can transform a string into a number. 
What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, 
and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/
   // Решение:
      const stringToNumber = function(str){
        
        return Number(str);
      }
// *****************************************************************************************


