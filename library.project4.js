// Ricardo Aviles
// SDI 1301
// Assignment Project 4
// 01/30/2013

// My Library String

var myLibraryString = function () {
    var checkPhoneNumber = function (string) {
        var numberCheck = /\d{3}\-\d{3}\-\d{4}/;
        
        return numberCheck.test (string);
    };
    
    var checkEmail = function (string) {
        var emailCheck = /([\w-\.]+)@((?:[\w] +\.)+)(a-zA-Z]{2,4})/;
        
        return emailCheck.test (string);
    };
    
    var checkUrl = function (string) {
        var urlCheck = /^(?:http|https):/;
        
        return urlCheck.test (string);
    };
    
    var changeInfo = function (string,newInfo) {
        var infoChange = /\W/g;
        
        return string.replace (infoChange.newInfo);
    };
    
        return {
            "checkPhoneNumber": checkPhoneNumber,
            "checkEmail": checkEmail,
            "checkUrl": checkUrl,
            "changeInfo": changeInfo
        };
};

// My Library Numbers

var myLibraryNumber = function () {
    var numString = function (number) {
        return Number (number);
    };
    
    var decimalNUmber = function (number) {
        return Number (number);
    };
    var decimalNumber = 234.8769
        numberDecimal = decimalNumber.toFixed(2);
    
        return {
            "numString": numString,
            "numberDecimal": numberDecimal
    };
};

// Tests

// String

console.log ("Results of testing strings: ");

var libStrings = myLibraryString ();

console.log (libStrings.checkPhoneNumber ("888-867-5309"));
console.log (libStrings.checkEmail ("johndoe@chacho.com"));
console.log (libStrings.checkUrl ("http://msi.com"));
console.log (libStrings.changeInfo ("a,e,i", "/"));

// Numbers

console.log ("Results of testing numbers: ");

var libNum = myLibraryNumber ();

console.log (libNum.numString ("89"));
console.log (libNum.numberDecimal);