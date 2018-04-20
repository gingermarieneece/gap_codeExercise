/**
* getCleanString - removes all whitespace, tabs and newline characters from the string
* @PARAM (STRING) thisString - the string that gets cleaned
* @PARAM (boolean) OPTIONAL makeLowerCase - converts entire string to lowercase
if set to true
* @return returns string with no whitespace
*
getCleanString: function(thisString, makeLowerCase) {
thisString = thisString.replace(/^\s+|\t+|\n+| |\s+$/g, &#39;&#39;);
thisString = makeLowerCase ? thisString.toLowerCase() : thisString;
return thisString;
}
*/

exports.getCleanString = function (thisString,makeLowerCase)
{
    thisString = thisString.replace(/^\s+|\t+|\n+| |\s+$/g, '');
    thisString = makeLowerCase ? thisString.toLowerCase() : thisString;
    return thisString;
 }