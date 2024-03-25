"use strict";

// data types
// imp-note : everythin in javascript is an object

// 1. Number

var v1 = 12;
var v2 = 12.34;

// 2. String

var v3 = "Hello";
var v4 = "Hello";
var v5 = `Hello`;

var dynamciString = `Hello ${v1}`;
var multiLineString = `Hello
World`;

// 3. Boolean

var v6 = true;
var v7 = false;

// imp-note: falsy values in javascript are false, 0, "", null, undefined, NaN , // remaining all are truthy values
// https://dorey.github.io/JavaScript-Equality-Table/

// 4. undefined
var v8;

// 5. null
var v9 = null;

// 6. object

// how to create object in javascript?

// step-1: allocate memory ==> new
// step-2: intialize memory with properties ==> constructor

var v10 = new Object();

// imp-note:
// by default javascript object is extensible
v10.name = "Nag";
v10.age = 40;
// by default javascript object is configurable
delete v10.age;
// by default javascript object is writable
v10.name = "Nag N";

// Object.preventExtensions(v10); // preventExtensions
// Object.seal(v10); // preventExtensions + configurable = false
// Object.freeze(v10); // preventExtensions + configurable + writable = false

// v10.address = "chennai";
// delete v10.name;
// v10.name = "Nagabhushanam N";

// e.g

var httpConfig = new Object();
httpConfig.url = "http://";
httpConfig.method = "GET";
httpConfig.port = 80;

// or ( literal-style object)

var httpConfig = {
  url: "http://",
  method: "GET",
  port: 80,
};

// 7. Array

var arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);

// or ( literal-style array)

var arr = [1, 2, 3];

// 8. RegExp

var mobilePattern = new RegExp("\\d{10}");
var aadharPattern = new RegExp("\\d{4}-\\d{4}-\\d{4}");

// or ( literal-style RegExp)

var mobilePattern = /\d{10}/;
var aadharPattern = /\d{4}-\d{4}-\d{4}/;

// 9. Function

var add = new Function("n1", "n2", "var result=n1+n2;return result;");

// or ( literal-style function)

function add(n1, n2) {
  var result = n1 + n2;
  return result;
}

// 10. Date

var today = new Date();

// ...

// custom data types

// e.g Person

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var p1 = new Person("Nag", 40);
var p2 = new Person("Ria", 8);

//....
