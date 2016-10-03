/// <reference path="angular.d.ts" />

import dogSay from './dog'
import * as _ from "lodash";

var requireWord = require("./requireWord")
requireWord("require")

//require进来的angular即使有d.ts也无法有接口提示，必须使用import
// let angular = require('angular') 

angular.element(document).ready( ()=>{
	console.log('angular wrap')
} )

let str: string = "123567"
dogSay(str)

_.map([1,2,3], (num)=>{
	console.log(num)
})

let [a,...b] = [1,2,3,4]
console.log(b)


for(let s of b) {
	console.log(s)
}





