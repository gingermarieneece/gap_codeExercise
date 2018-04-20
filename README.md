
# Node Module Exercise - getCleanString

## Description
        Converts the following js function into a node module
       
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

   https://npm.runkit.com/gap_project

    var testMessage = gapProject.getCleanString('PLEASE CLEAN ME', true);

  
## Output should be 

    pleasecleanme



##


# Responsive Nav Exercise - index.html
    
## Description
    Responsive Nav with 4 items (e.g. 'nav A')
    Has 'on', 'off' & hover states
    'on' states will show sub nav with 4 items: (e.g. 'subnav A 1' - indicate it belongs to that nav) 
    

## Usage

   https://htmlpreview.github.io/?https://github.com/gingermarieneece/gap_codeExercise/blob/master/index.html#
   
## Output should be 
   
   ![ScreenShot](https://github.com/gingermarieneece/gap_codeExercise/blob/master/responsiveNavImg.jpg)
