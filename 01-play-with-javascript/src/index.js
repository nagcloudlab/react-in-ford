const fordGreet = require("ford-greet");
const lodash = require("lodash");

// require("./foodbox/menu");
import mainItem, {
  secondaryItem1 as si1,
  secondaryItem2,
} from "./foodbox/menu";

import * as menu from "./foodbox/menu";

console.log(mainItem);
console.log(si1);
console.log(secondaryItem2);

console.log(menu.default);
console.log(menu.secondaryItem1);
console.log(menu.secondaryItem2);

const language = "tn";
fordGreet.greet(language);

const arr1 = [1, 2, 3];
const arr2 = [3, 5, 6];

const result = lodash.difference(arr1, arr2);
