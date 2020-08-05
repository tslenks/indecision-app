import substract, { square, add, somestring } from './utils';
import isSenior, { isAdult, canDrink } from './person'

console.log(square(4));
console.log(add(100, 36));
console.log(isAdult(19) ? 'Adult' : 'Teenager');
console.log(substract(100, 68));
console.log(canDrink(17) ? 'Drunk' : 'Sober');
console.log(isSenior(66) ? 'Senior' : 'Adult');
console.log(somestring);

