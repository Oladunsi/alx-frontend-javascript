import { createRequire } from "module";
const require = createRequire(import.meta.url);
var assert = require('assert');
var fooSym = Symbol('foo');
var myObj = {};
myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
console.log(Object.keys(myObj));
console.log(Object.getOwnPropertyNames(myObj));
console.log(Object.getOwnPropertySymbols(myObj));
// console.log(Symbol('foo'));
assert(Symbol('foo').toString() === 'Symbol(foo)');
console.log(assert.notEqual(Symbol(), Symbol()))