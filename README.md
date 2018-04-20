
# Node Module Exercise - getCleanString

## Converts the following js function into a node module
    /**
    *getCleanString - removes all whitespace, tabs and newline characters from the string
    *@PARAM (STRING) thisString - the string that gets cleaned
    *@PARAM (boolean) OPTIONAL makeLowerCase - converts entire string to lowercase if set to true
    *@return returns string with no whitespace
    */
    
        getCleanString: function(thisString, makeLowerCase) {
            thisString = thisString.replace(/^\s+|\t+|\n+| |\s+$/g, '');
            thisString = makeLowerCase ? thisString.toLowerCase() : thisString;
            return thisString;
        }

  


## Usage

   
   <a href="https://npm.runkit.com/gap_project" target="blank">https://npm.runkit.com/gap_project</a>

    var gapProject = require("gap_project")

    var testMessage = gapProject.getCleanString('PLEASE CLEAN ME', true);

  
## Output should be 

    pleasecleanme

