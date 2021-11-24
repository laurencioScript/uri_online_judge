let textInput = require('fs').readFileSync('./dev/stdin', 'utf8');
// let textInput = require('fs').readFileSync('/dev/stdin', 'utf8');

let inputs = textInput.split('\n');

const count = inputs[0];

inputs.shift()

inputs = inputs.filter((a,index ) => index < count)

inputs = inputs.map(input => {
  
  let output = '', skipChar = 3;

  for (let key of input) {
    if( (key.charCodeAt() >= 65 && key.charCodeAt() <= 90) || (key.charCodeAt() >= 97 && key.charCodeAt() <= 122) ){
      const newChar = key.charCodeAt() + skipChar;
      output += String.fromCharCode(newChar) ;
    }
    else{
      output += key;
    }
  }
  
  return output;
})
  
inputs = inputs.map(input => {

  let output = []
  
  for (let key of input) {
    output.unshift(key)
  }

  return output.join('');

})

inputs = inputs.map(input => {

  let skipChar = -1, middleValue = Math.trunc(input.length / 2);
  let output = input.substring(0, middleValue);
  for (let index = (middleValue); index < input.length; index++) {
    output += String.fromCharCode(input[index].charCodeAt() + skipChar) ;
  }
  return output;
})

for(let output of inputs){
  console.log(output)
}
  