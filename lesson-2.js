// Math, Properties, Methods, and Global Objects

function exampleExercise(num1, num2){
    // In this exercise, you will be given two variables: num1 and num2
    // Create a variable called 'difference' and using math operators return num2 subrtracted from num1
   
    const difference = num1 - num2;
    console.log(difference);
  }
  exampleExercise();
  
  function exerciseOne(num1, num2){
    // Given two variables: num1 and num2
    // Create a variable called 'sum' and using math operators return num1 added to num2
    
    const sum = num1 + num2;  
    console.log(sum);
  }
  exerciseOne();
  
  function exerciseTwo(num1, num2){
    // Given two variables: num1 and num2
    // Create a variable called 'product' and using math operators return num1 multiplied by num2
    
    const product = num1 * num2;
    console.log(product);
  }
  exerciseTwo();
  
  function exerciseThree(str){
    // Given a variable called: str
    // Create a variable called 'length' and using the length property assign the new variable to the length of str
    
    const length = str.length;
    console.log(length);
  }
  exerciseThree();
  
  function exerciseFour(num1){
    // Given a variable called: num1
    // Create a variable called 'rounded' and to it call the round method Math global object passing num1.
   
   const rounded = Math.round(num1);
    console.log(rounded);
  }
  exerciseFour();