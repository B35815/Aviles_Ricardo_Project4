// Ricardo Aviles
// SDI 1301
// Assignment Project 4
// 01/31/2013


// Make Up: Renamed js file Project 2
// My Library

// String Functions

// Does a string follow a 123-456-7890 pattern like a phone number?
// Make Up: Missing Boolean nested conditionals Project 3
// Make Up: Conditionals empty blocks Project 3
// Make Up: Some Global Variables Project 2
// Make Up: Return Values not in use Project 3
// Make Up: Flowchart Terminator should contain name of function/method Project 3
var myLibraryString = function () {
    var checkPhoneNumber = function (string) {
        var numberCheck = /\d{3}\-\d{3}\-\d{4}/;
        
        return numberCheck.test (string);
    };
    
// Does a string follow an aaa@bbb.ccc pattern like an email address?
    var checkEmail = function (string) {
        var emailCheck = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;
        
        return emailCheck.test (string);
    };
    
// Is the string a URL (Does it start with http:// or https://)?
    var checkUrl = function (string) {
        var urlCheck = /^(?:http|https):/;
        
        return urlCheck.test (string);
    };

// Title-case a string (split into words, then uppercase the first letter of each word).
// Make Up: Missing Loop Project 2
    var checkWord = function toPascalCase (str) {
        var array = str.split (/\s|_/);
            for(var i=0,l = array.length; i<l; i++) {
                array[i] = array[i].substr(0,1).toUpperCase() + (array[i].length > 1 ? array[i].substr(1).toLowerCase() : "");
    }
        return array.join("");
}
    
/* Given a string that is a list of things separated by a given string, as well as another
string separator, return a string with the first separator changed to the second: Òa,b,cÓ +
Ò,Ó + Ò/Ó --> Òa/b/cÓ.*/
    var changeInfo = function (string,newInfo) {
        var infoChange = /\W/g;
        
        return string.replace (infoChange.newInfo);
    };
// Make Up: Missing the return of values on some functions Project 2   
        return {
            "checkPhoneNumber"  : checkPhoneNumber,
            "checkEmail"        : checkEmail,
            "checkUrl"          : checkUrl,
            "checkWord"         : checkWord,
            "changeInfo"        : changeInfo
        };
};

// Numbers Functions

// Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.
var NumberLibrary = function () {
	var numDecimal = function (num,afterDecimal) {
            
        return Number(num.toFixed(afterDecimal));
    };

// Fuzzy-match a number: is the number above or below a number within a certain percent?
// Make Up: Missing the use of ( || ) on Project 2
// Make Up: Add "else" only when required, if no string on else no need to add Project 3
	var fuzNum = function (num,compareNum,percent) {
		var percentage = (num/compareNum) * 100;
		if ((num >= compareNum && percentage >= percent) || (num < compareNum && percentage < percent)) {
			return false;
		} else {
			return true;
		};
	};

// Find the number of hours or days difference between two dates.
// Make Up: Missing Math on Project 1
    var timeDates = function (date1,date2) {
	    var results = [];
	    var difference = (date1 > date2) ? date1.getTime() - date2.getTime() : date2.getTime() - date1.getTime();
		results[3] = difference / 1000;
		results[2] = results[3] / 60;
		results[1] = results[2] / 60;
		results[0] = results[1] / 24;
		return results;

    };
// Given a string version of a number, such as Ò42Ó, return the value as an actual Number data type, such as 42.
    var strToNum = function (num) {
		return Number(num);
    };

	return {
		"numDecimal"    : numDecimal,
		"fuzNum"      : fuzNum,
		"timeDates"   : timeDates,
		"strToNum"      : strToNum

	};
};


// Arrays Functions
// Make Up: Missing Arrays and Methods Project 2
var ArrayLibrary = function () {
// Find the smallest value in an array than is greater than a given number.
	var smallNumArray = function (array,num) {
		array.sort(function(a,b){return a-b;});
		if (num >= array[0] && num < array[array.length-1]) {
			array.push(num);
			array.sort(function(a,b){return a-b;});
			var result = array[array.lastIndexOf(num) + 1];
			return result;
		} else {
			return null;
		};
	};

// Find the total value of just the numbers in an array, even if some of the items are not numbers.
	var totalValNumArray = function (array) {
		var total = 0;
		for (var i = 0, j = array.length; i < j; i++) {
			if (array[i]/1 === array[i]) {
				total += array[i];
			};
		};
		return total;
	};

/* Given an array of objects and the name of a key, return the array sorted by the value of Given an array of objects and the name of a key,
return the array sorted by the value of that key in each of the objects: ÒaÓ + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].that key in each of the objects: ÒaÓ + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].
*/
	var sortKeyArray = function (array,givenKey) {
		return (array.sort(function(a,b){return a[givenKey] - b[givenKey];}));
	};

	return {
		"smallNumArray"         : smallNumArray,
		"totalValNumArray"      : totalValNumArray,
		"sortKeyArray"          : sortKeyArray,
	};
};

// Make Up: Missing Outputs on Project 2
// String Tests

console.log ("Results of testing strings: ");
var libStrings = new myLibraryString ();
console.log (libStrings.checkPhoneNumber ("888-867-5309"));
console.log (libStrings.checkEmail ("Aricardo@yahoo.com"));
console.log (libStrings.checkUrl ("http://msi.com"));
console.log (libStrings.checkWord ("eXPerT"));
console.log (libStrings.changeInfo ("a,e,i", "/"));

// Number Tests

console.log ("Results of testing numbers: ");
var numLib = NumberLibrary();
console.log(numLib.numDecimal(4.897));
console.log(numLib.fuzNum(5, 50, 10));
console.log(numLib.fuzNum(10, 5, 50));
var date1 = new Date(2013,1,31);
var date2 = new Date(2013,1,1);
var timeConversion = numLib.timeDates(date1,date2);
console.log("Difference in days: " + timeConversion[0] + ", in hours: " + timeConversion[1]);
console.log(numLib.strToNum("762"));

// Array Tests
console.log("Array Tests");
var arrLib = ArrayLibrary();
var numList = [3,7,11,14,18,2,6];
console.log(arrLib.smallNumArray(numList,1));
var randomList = [36,"car","cat",23,31,42,"211",5];
console.log(arrLib.totalValNumArray(randomList));
var arrayObjects = [{a:2},{a:7},{a:3},{a:8},{a:4},{a:9},{a:5},{a:1},{b:6},{b:1},{b:0},{b:5},{b:2},{b:7},{c:4},{c:9},{c:1},{c:2},{c:5},{c:7}];
console.log(arrLib.sortKeyArray(arrayObjects,"a"));
var arrayList = ["Ricardo","Rossy", 546, 633, "Sarah", 745, "John"];