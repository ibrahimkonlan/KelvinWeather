// current temperature with kelvin degree.
const kelvin = 0; 
// converting kelvin to celsius.
const celsius = kelvin - 273;
// converting celsius to fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
// round down fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);