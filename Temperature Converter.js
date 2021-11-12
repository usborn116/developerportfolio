//setting temp in Kelvin
const kelvin = 0
console.log('Temperature in Kelvin: '+kelvin)
//converting to celsius
const celsius = kelvin - 273
console.log('Temperature in Celsius: '+celsius)
//converting to fahrenheit
let fahrenheit = celsius * (9/5) + 32
//rounding down 
fahrenheit = Math.floor(fahrenheit)
console.log('The temperature is '+fahrenheit+' degrees Fahrenheit.')
