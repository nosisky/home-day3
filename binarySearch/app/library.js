const myArray = {
  toTwenty(i) {
    let result = Array.from(Array(20), (v,i) => i+1);
    if(!i){ //to Twenty
    return result;
    } else {
      return result[i];
    }
  },
  toForty(i) {
    let result = Array.from(Arry(20), (v,i) => i+1).map(function(i) {
      return i * 2; //to forty
    });
    if(!i){
    return result;
    } else {
      return result[i];
    }
  },
  toOneThousand(i) {
    let result = Array.from(Array(100), (v,i) => i+1).map(function(i) {
      return i * 10; //to one thousand
    });
    if(!i){
    return result;
    } else {
      return result[i];
    }
  }
};

//Extending the array class
Array.prototype.search = function search(item, list=this ) {
    let min = 0;
    let max = list.length - 1;
    let guess;
    let count = 0;

	let bitwise = (max <= 2147483647) ? true : false;
	let obj = {
	  count: 0,
	  index: -1,
	  length: list.length,
	}
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { obj.index = guess;
			
			  return obj;
			}
			else {
			  obj.count += 1;
				if (list[guess] < item) { min = guess + 1;
			
				}
				else { max = guess - 1;
					
				}
			}
		}
	} 
    
    return obj;
};
module.exports = myArray;