"use strict";

/*

    function closure

    A closure is a function having access to the parent scope, 
    even after the parent function has closed.


    when/why to use closure?

    1. To abstract public behavior of any module
    2. While execuuating async code


*/

//  author : Nag
//  module : counter

// self executing function
// IIFE - Immediately Invoked Function Expression

const counter = (function init() {
  let count = 0; // private
  function increment() {
    // public
    count++;
  }
  function getCount() {
    // public
    return count;
  }
  return {
    increment,
    getCount,
  };
})();
