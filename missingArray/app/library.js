'use strict'
const find = {
	findMissing(arr1, arr2){
		//trying to make sure the number of arguments = 2
		if(arguments.length !== 2){
			let msg = "Only two arguments are allowed";
			return msg;
		}
		//Concatenate arr1 with arr2 
		let newArray = arr1.concat(arr2);
		//define an empty array
		let missingNum = [];
		//using the array prototype function map to filter data
		let result = newArray.map(function(i){
			if(newArray.lastIndexOf(i) === newArray.indexOf(i)) {
				missingNum.push(i);
			}
		});
		//check if there was a missing number
		if (missingNum.length < 1) {
			let finalResult = 0;
			return finalResult;
		} else {
			let finalResult = missingNum[0];
			return finalResult;
		}
		
		
	}
}
module.exports = find;