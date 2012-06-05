module("array tests");

test("indexOf", function() {
	var array = [2, 5, 9, 2];  
	var index = array.indexOf(2);  
	ok(index === 0, "index is 0");

	index = array.indexOf(7);  
	ok(index === -1, "index is -1");  

	//Finding all the occurrences of an element
	var indices = [];  
	var element = 2;
	var idx = array.indexOf(element);  
	
	while (idx != -1) {  
	    indices.push(idx);  
	    idx = array.indexOf(element, idx + 1);  
	}  
	
	ok(indices.length === 2, "result array length is 2");
	ok(indices[0] === 0 && indices[1] === 3, "indices are at 0 and 3");
});

test("lastIndexOf", function() {
	var array = [2, 5, 9, 2];  
	
	var index = array.lastIndexOf(2);  
	ok(index === 3, "index is 3");

	index = array.lastIndexOf(7);  
	ok(index === -1, "index is -1");

	index = array.lastIndexOf(2, 3);  
	ok(index === 3, "index is 3"); 

	index = array.lastIndexOf(2, 2);  
	ok(index === 0, "index is 0");

	index = array.lastIndexOf(2, -2);  
	ok(index === 0, "index is 0");

	index = array.lastIndexOf(2, -1);  
	ok(index === 3, "index is 3");

	//Finding all the occurrences of an element
	var element = 2;
	var indices = [];
	var idx = array.lastIndexOf(element);

	while (idx != -1) {
	  indices.push(idx);
	  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
	}

	ok(indices.length === 2, "result array length is 2");
	ok(indices[0] === 3 && indices[1] === 0, "indices are at 0 and 3");
});

test("every", function() {
	function isBigEnough(element, index, array) {  
  		return (element >= 10);  
	}  

	var passed = [12, 5, 8, 130, 44].every(isBigEnough);  
	ok(!passed, "passed is false");

	passed = [12, 54, 18, 130, 44].every(isBigEnough);  
	ok(passed, "passed is true"); 
});

test("filter", function() {
	function isBigEnough(element, index, array) {  
		return (element >= 10);  
	}  
	var flt = [12, 5, 8, 130, 44].filter(isBigEnough);  
	// filtered is [12, 130, 44] 

	ok(flt.length === 3, "filtered length is 3");
	ok(flt[0] === 12 && flt[1] === 130 && flt[2] === 44, "filtered are 12,130,44")
});

test("map", function() {
	var numbers = [1, 4, 9];  
	var roots = numbers.map(Math.sqrt);  
	
	ok(roots[0] === 1 && roots[1] === 2 && roots[2] === 3, "roots is now [1, 2, 3]");
	ok(numbers[0] === 1 && numbers[1] === 4 && numbers[2] === 9, "numbers is still [1, 4, 9]");

	// using map generically
	var a = Array.prototype.map .call("Hello World", function(x) { return x.charCodeAt(0); })  
	ok(a[0] === 72 && a[1] === 101 && a[2] === 108 && a[8] === 114 && a[9] === 108 && a[10] === 100, "a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]")
});

test("some", function() {
	function isBigEnough(element, index, array) {
		return (element >= 10);
	}

	var passed = [2, 5, 8, 1, 4].some(isBigEnough);
	ok(!passed, "passed is false");

	passed = [12, 5, 8, 1, 4].some(isBigEnough);
	ok(passed, "passed is true");
})

