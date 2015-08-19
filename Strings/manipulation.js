/* reverse a string */
String.prototype.backwards = function() {
    var result = this.split('').reverse().join('');
    return result;
}

var back = 'a man a plan'.backwards();
console.log(back); //nalp a nam a

/* return if a string is a palindrome */
String.prototype.isPalindrome = function() {
    var str = this.replace(/\W/g, '');
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
};

var isPal = 'a man a plan a canal panama'.isPalindrome();
console.log(isPal); //true