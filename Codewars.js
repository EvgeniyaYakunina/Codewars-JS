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