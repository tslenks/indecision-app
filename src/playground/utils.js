const square  = x => x * x;
const add  = (x, y) => x + y;
const substract  = (x, y) => x - y;
const somestring  = 'sdsds';
/**
 * 
 *  export const square  = x => x * x;
 *  export const add  =  (x, y) => x + y;
 *  const substract  =  (x, y) => x - y;
 *  export default substract; // for default we can't put const or let or var when declaring
 *  or
 *  export default (x, y) => x - y;
 */

export { square, add, somestring, substract as default};