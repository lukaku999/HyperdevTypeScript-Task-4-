# Overview

The review refers to the file student_code.ts. A running file that incorparates all of the things I mentioned can be found from the file index.ts.

Before getting into the mistakes, I would like to say that your attempt at coding the caesar cipher was good. There were mistakes here and there but overall, you knew the steps required to solve the encoding. Well done!!! So let's get into it.
 
********************************************

# Mistakes responsible for errors when compiling

- On line 2, 'Alphabet' cannot be used as an identifier, because it is in conflict with a global identifier. I would suggest using type string for the variable that will contain the alphabet, instead of defining type 'Alphabet'.

- On line 5, the name T has not been declared, which leads to an error.

- On line 5, the parameters have not been defined properly. T is not a type, which makes the declaration of the parameter invalid. Additionally, within the code shift is used as a number, but has been defined as a string, leading to errors.

- Don't forget to define the type returned by the function on line 5. I would write the entire function as 'const caesarCipher = (encodedText: string, shift: number) : string => {... return decodedText}'.

# Tips to assist you in developing good coding practices
- When naming variables, the common convention in Javascript and ulitmately Typescript, is to use camelcase when naming variables. For example, decodedText, encodedText, caesarCipher and so on. I would suggest using this practice consistently throughout your code.

- I would also suggest using variable names that are self-explanatory. Using 'string' as a name for a parameter meant to describe the encoded text on line 5 is not good practice. For more complex projects it might make it hard to read your code. I would suggest defining the parameters as follows, '(encodedText: string, shift: number)'. Remember, the encodedText should refer to the parameter and the decodedText should refer to the output (on your code, you defined the returned variable as 'encodedText' instead of 'decodedText' on line 10). 
  
- The code from line 13 to 15 is redundant. I would suggest removing the if statement and just calculating the shift % 26 directly on line 33, instead of line 13. Plus, with the modulus, the if statement would not be nee from line 26 to 34.

- First and foremost, there is no issue with you using a while loop, but a nice alternative that can produce cleaner code is using the reducer helper. If you refer to the index.ts in the src folder, the decoding is done with 10 lines (from line 10 to 20) as opposed to +20 line in your code. Array helpers can really clean your code. If you want to learn more about them go to: https://medium.com/swlh/array-helper-methods-in-es6-28fc5e5a5dc9.

