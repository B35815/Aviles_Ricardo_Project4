// Ricardo Aviles
// SDI 1301
// Assignment Project 4
// 01/30/2013

// My Library

// String Functions

// Does a string follow a 123-456-7890 pattern like a phone number?
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
    
        return {
            "checkPhoneNumber": checkPhoneNumber,
            "checkEmail": checkEmail,
            "checkUrl": checkUrl,
            "checkWord": checkWord,
            "changeInfo": changeInfo
        };
};

// Numbers Functions

/*Given a string version of a number, such as Ò42Ó, return the value as an actual Number
data type, such as 42.*/
var myLibraryNumber = function () {
    var numString = function (number) {
        return Number (number);
    };
    
// Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.
    var decimalNumber = 234.8769
        numberDecimal = decimalNumber.toFixed(2);
    
        return {
            "numString": numString,
            "numberDecimal": numberDecimal
    };
};


console.log ("Results of testing strings: ");

var libStrings = new myLibraryString ();

console.log (libStrings.checkPhoneNumber ("888-867-5309"));
console.log (libStrings.checkEmail ("Aricardo@yahoo.com"));
console.log (libStrings.checkUrl ("http://msi.com"));
console.log (libStrings.checkWord ("eXPerT"));
console.log (libStrings.changeInfo ("a,e,i", "/"));

console.log ("Results of testing numbers: ");

var libNum = new myLibraryNumber ();

console.log (libNum.numString ("89"));
console.log (libNum.numberDecimal);