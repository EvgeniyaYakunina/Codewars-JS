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
          }
      
        sayFullName(){
          return `${this.firstName} ${this.lastName}`;
          }
      }
      Person.greetExtraTerrestrials = function(raceName){
          return `Welcome to Planet Earth ${raceName}`;
        }
  