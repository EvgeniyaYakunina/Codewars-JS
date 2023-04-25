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


   /* String Templates - Bug Fixing #5
Oh no! Timmy hasn't followed instructions very carefully and forgot
 how to use the new String Template feature, 
 Help Timmy with his string template so it works as he expects!
 */
   // Решение:
      function buildString(...template){
        return `I like ${template.join(', ')}!`;
      }
// *****************************************************************************************

   /* Sum The Strings
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
*/
   // Решение:
      const sumStr = (a,b) => {
        if(a === '') a = '0';
        if(b === '') b = '0';
        return `${parseInt(a) + parseInt(b)}`;
      }
// *****************************************************************************************


   /* Basic variable assignment
This code should store "codewa.rs" as a variable called name 
but it's not working. Can you figure out why?
var a == "code";
var b == "wa.rs";
var name == a + b;
*/
   // Решение:
      var a = "code";
      var b = "wa.rs";
      var name = a + b;
// *****************************************************************************************


   /* Grasshopper - Basic Function Fixer
I created this function to add five to any number that was 
passed in to it and return the new value. It doesn't throw any errors
 but it returns the wrong number.

Can you help me fix the function?
*/
   // Решение:
        function addFive(num) {
          var total = num + 5
          return total
        }
// *****************************************************************************************

   /* Keep up the hoop
Alex just got a new hula hoop, he loves it but feels discouraged 
because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes
 round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/
   // Решение:
   function hoopCount (n) {
  
    if(n >= 10){
      return "Great, now move on to tricks";
    }
    return "Keep at it until you get it";
  }
// 2 решение:
  const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';
// *****************************************************************************************

   /* Opposites Attract
Timmy & Sarah think they are in love, but around where they live, 
they will only know once they pick a flower each.
 If one of the flowers has an even number of petals and the other has an odd
  number of petals it means they are in love.

Write a function that will take the number of petals of each flower and 
return true if they are in love and false if they aren't.
*/
   // Решение:
        function lovefunc(flower1, flower2){
        
          return flower1 % 2 !== flower2 % 2;
        }
// *****************************************************************************************

   /* Super Duper Easy
Make a function that returns the value multiplied 
by 50 and increased by 6. If the value entered is 
a string it should return "Error".
*/
   // Решение:
        const problem = x =>typeof x === "number" ? x * 50 + 6:"Error"
// *****************************************************************************************

   /* Basic Mathematical Operations
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/
   // Решение:
        basicOp = (operation, value1, value2) => eval(value1 + operation + value2)

   // 2 вариант:
        function basicOp (operation, value1, value2){
          
          switch(operation){
              case "+": return value1 + value2;
              case "-": return value1 - value2;
              case "*": return value1 * value2;
              case "/": return value1 / value2;
          }
        }
// *****************************************************************************************

   /* You Can't Code Under Pressure #1/
Code as fast as you can! You need to double the integer and return it.
*/
   // Решение:
        const doubleInteger = i => 2 * i;
// *****************************************************************************************


   /* You only need one - Beginner/
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/
   // Решение:
       const check = (a, x) => a.includes(x);
// *****************************************************************************************


   /* Count the Monkeys!
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
 */
   // Решение:
      function monkeyCount(n) {
         return Array.from(Array(n), (_,i)=>i+1)
         }
// *****************************************************************************************

   /* Grasshopper - If/else syntax debug
If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user 
is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors
 while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than
 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole 
number between -10 and 10.
function checkAlive (health) {
  if () {
    health < 0
    return false
  } else () {
    return true
  }
}
*/
   // Решение:
         function checkAlive (health) {
            return health > 0
            }
// *****************************************************************************************  

   /* Grasshopper - Function syntax debugging
A student was working on a function and made some
syntax mistakes while coding. Help them find their 
mistakes and fix them.
*/
   // Решение:
         function main (verb, noun){
            return verb + noun
         }
// ***************************************************************************************** 


   /* Grasshopper - Variable Assignment Debug
Fix the variables assigments so that this code 
stores the string 'devLab' in the variable name.
*/
   // Решение:
         var a = "dev";
         var b = "Lab";

         var name = a + b;
// ***************************************************************************************** 

   /* Grasshopper - Object syntax debug
While making a zork-type game, you create an object of rooms. 
Unfortunately, the game is not working. Find all of the errors in the 
rooms object to get your game working again.
*/
   // Решение:
         var rooms = {
            first: {
            description: 'This is the first room',
            items: {
               chair: 'The old chair looks comfortable',
               lamp: 'This lamp looks ancient'
            }
         },
            second: {
            description: 'This is the second room',
            items: {
               couch: 'This couch looks like it would hurt your back',
               table: 'On the table there is an unopened bottle of water'
            }
            },
         }
// ***************************************************************************************** 

   /* 5 without numbers !!
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use 
any of the following characters: 0123456789*+-/
*/
   // Решение:
         function unusualFive() {
            return ["one", "two", "three", "four", "five"].length;
         }
// ***************************************************************************************** 

   /* Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work.
He uses Switch/Cases to evaluate the given properties of an object,
 can you fix timmy's function?
*/
   // Решение:
         function evalObject(value){
            var result = 0;
            
            switch(value.operation){
            case'+': result = value.a + value.b;
               break;
            case'-': result = value.a - value.b;
               break;
            case'/': result = value.a / value.b;
               break;
            case'*': result = value.a * value.b;
               break;
            case'%': result = value.a % value.b;
               break;
            case'^': result = Math.pow(value.a, value.b);
            }
            return result;
         }
// ***************************************************************************************** 

   /* Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" 
string for true, or a "No" string for false.
*/
   // Решение:
         const boolToWord = bool =>
            bool == true ? 'Yes' : 'No';
// *****************************************************************************************

   /* Returning Strings
Make a function that will return a greeting statement that uses an input;
 your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/
   // Решение:
         function greet(name){
            return `Hello, ${name} how are you doing today?`
         }
// *****************************************************************************************

   /* Name on billboard
You can print your name on a billboard ad.
 Find out how much it will cost you. Each character has a default price of £30,
  but that can be different if you are given 2 parameters instead of 1.
You can not use multiplier "*" operator.
If your name would be Jeong-Ho Aristotelis, 
ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/
   // Решение:
         function billboard(name, price = 30){
            let cost = 0;
            for(var i = 0; i < name.length; i++) {
               cost += price;
               }
            return cost;
            } 
// *****************************************************************************************

   /* If you can't sleep, just count sheep!!
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example,
 return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/
   // Решение:
         var countSheep = function (num){
         
            let count = "";
            for(let i = 1; i <= num; i++){
               count += `${i} sheep...`;
               }
               return count;
         }
// *****************************************************************************************

   /* Removing Elements
Take an array and remove every second element from the array.
 Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/
   // Решение:
         function removeEveryOther(arr){
            var Array =[];
            for(let i = 0; i < arr.length; i += 2){
               Array.push(arr[i]);
               }
            return Array;
         }
// *****************************************************************************************

   /* My head is at the wrong end!
You're at the zoo... all the meerkats look weird. 
Something has gone terribly wrong - someone has gone and switched 
their heads and tails around!

Save the animals by switching them back. You will be given an array 
which will have three values (tail, body, head). It is your job to re-arrange 
the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: 
you have to change the element positions with the same exact logics

Simples!
*/
   // Решение:
         function fixTheMeerkat(arr) {
         
            const reversed = arr.reverse();
            return arr;
         }
// *****************************************************************************************

   /*  Will you make it?
You were camping with your friends far away from home, 
but when it's time to go back, you realize that your fuel is 
running out and the nearest pump is 50 miles away! You know that on average, 
your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if 
it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
*/
  // Решение:
         const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
            return mpg * fuelLeft >= distanceToPump
         };
// *****************************************************************************************

   /* Grasshopper - Debug
Debug celsius converter
Your friend is traveling abroad to the United States
 so he wrote a program to convert fahrenheit to celsius. 
 Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)
Remember that typically temperatures in the current weather 
conditions are given in whole numbers. It is possible for temperature 
sensors to report temperatures with a higher accuracy such as to the nearest tenth.
 Instrument error though makes this sort of accuracy unreliable for
 many types of temperature measuring sensors.
*/
   // Решение:
         function weatherInfo (temp) {
            var c = convertToCelsius(temp);
            if (c <= 0)
            return c + " is freezing temperature";
            else
            return c + " is above freezing temperature"; 
         }
         
         function convertToCelsius (temperature) {
            var celsius = (temperature - 32) * (5/9);
            return celsius;
         }
// *****************************************************************************************

   /* Grasshopper - Messi goals function
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/
   // Решение:
         function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
            var total = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
            return total;
         }
// *****************************************************************************************

   /* Enumerable Magic #4 - True for None?
Create a method none? (JS none) that accepts an array 
and a block (JS: a function), and returns true if the block 
(/function) returns true for none of the items in the array.
An empty list should return true.
*/
   // Решение:
         function none(arr, fun){
            return !arr.some(fun)
         }
// *****************************************************************************************

   /* Enumerable Magic #1 - True for All?
Task
Create a method all which takes two params:

a sequence
a function (function pointer in C)
and returns true if the function in the params returns true
for every element in the sequence. Otherwise, it should return false. 
If the sequence is empty, it should return true, since technically nothing failed the test.

Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
*/
   // Решение:
         function all( arr, fun ){
         
            return arr.every(fun)
         }
// *****************************************************************************************

   /* Training JS #9: loop statement --while and do..while
Task
Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. 
We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. 
Each time through the loop it will add one * to str, alternating 
on which side it is padded: the first time will add a * to the left side of str,
 the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/
   // Решение:
         function padIt(str,n){
      
            while(n >0){
            if (n % 2){
               str = "*" + str;
            }else{
               str = str + "*";
            }
            n--;
            }
            return str;
         }
// *****************************************************************************************

/* Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of 
multiplying the values together in order. 
Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
// Решение:
function grow(x){
   return x.reduce((a, b) => a * b);
   }
// *****************************************************************************************

   /* Training JS #7: if..else and ternary operator
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.
*/
   // Решение:
         function saleHotdogs(n){
            return n *(n < 5 ? 100 : n < 10 ? 95 : 90)
         }
// *****************************************************************************************

   /* Regular Ball Super Ball
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/
   // Решение:
         var Ball = function(ballType) {
            this.ballType = ballType || "regular"
         };
// *****************************************************************************************

   /* Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
   // Решение:
         function solution(str){
            return [...str].reverse().join``;
            }
// *****************************************************************************************

   /* altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase 
(or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase 
in your selected language; see the initial solution for details) such that each 
lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"      // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/
   // Решение:
         String.prototype.toAlternatingCase = function () {
            return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase(): a.toUpperCase()).join("");
         }
// *****************************************************************************************

   /* Beginner Series #2 Clock
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time
since midnight in milliseconds.
*/
   // Решение:
         function past(h, m, s){
            return h * 3600000 + m * 60000 + s * 1000
         }
// ***************************************************************************************** 

/* Switch it Up!
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/
// Решение:
function switchItUp(number){
   switch(number){
        case 0: 
       return "Zero";
       break;
       case 1: 
       return "One";
       break;
        case 2: 
       return "Two";
       break;
        case 3: 
       return "Three";
       break;
        case 4: 
       return "Four";
       break;
        case 5: 
       return "Five";
       break;
        case 6: 
       return "Six";
       break;
        case 7: 
       return "Seven";
       break;
        case 8: 
       return "Eight";
       break;
        case 9: 
       return "Nine";
       break;
   }
   }
// ********************************************************************************************

   /* Return the day
   Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/
   // Решение:
         function whatday(num) { 
            switch(num){
            case 1: return "Sunday"
            case 2: return "Monday"
            case 3: return "Tuesday"
            case 4: return "Wednesday"
            case 5: return "Thursday"
            case 6: return "Friday"
            case 7: return "Saturday"
            default: return "Wrong, please enter a number between 1 and 7"
         }
         }
// ********************************************************************************************

   /* Duck Duck Goose
The objective of Duck, duck, goose is to walk in a circle, 
tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP)
 and an index (1-based), return the name of the chosen Player
 (name is a property of Player objects, e.g Player.name)
*/
   // Решение:
         function duckDuckGoose(players, goose) {
            return players[(goose - 1)% players.length].name
         }
// ********************************************************************************************

   /* Welcome to the City
Create a method sayHello/say_hello/SayHello that takes as input a name, city, 
and state to welcome a person. Note that name will be an array consisting 
of one or more values that should be joined together with one space between each, 
and the length of the name array in test cases will vary.

Example:
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/
   // Решение:
         function sayHello( name, city, state ) {
            return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
         }
 // ********************************************************************************************

    /* Welcome!
 Your start-up's BA has told marketing that your website has a large audience
in Scandinavia and surrounding countries. Marketing thinks it would be great to
welcome visitors to the site in their own language. Luckily you already use an API
that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object).
 The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string),
 and returns a greeting - if you have it in your database. 
 It should default to English if the language is not in the database, 
 or in the event of an invalid input.

The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
*/
   // Решение:
         function greet(language) {
            return langs[language] || langs['english']
            }
            var langs ={
            english: 'Welcome',
            czech: 'Vitejte',
            danish: 'Velkomst',
            dutch: 'Welkom',
            estonian: 'Tere tulemast',
            finnish: 'Tervetuloa',
            flemish: 'Welgekomen',
            french: 'Bienvenue',
            german: 'Willkommen',
            irish: 'Failte',
            italian: 'Benvenuto',
            latvian: 'Gaidits',
            lithuanian: 'Laukiamas',
            polish: 'Witamy',
            spanish: 'Bienvenido',
            swedish: 'Valkommen',
            welsh: 'Croeso'
            }
// ********************************************************************************************