# Styleguide for Rideshare Comparison Project

**We use `eslint` and `prettier` to enforce our JS coding conventions. We use `stylelint` to enforce styling in our SCSS files**

## Javascript Files 
* No Unused Variables
* Required use of `const` or `let` 
* Tab width of length 2 
* Disallowed usage of tabs
* Line width of 80 characters 
* End line semi-colons 
* Lists and Objects end with commas
* Classnames will use BEM naming convention 

## SCSS Files
* Enforce the usage of variables within the files 
* Disallowed usage of `@` in scss 
* Empty line before and after custom properties 
* Required new line after semi-colon usage
* Disallow `!important` within declarations
* Maximum number of nested items is 2
* Variable and declaration pattern is: `^[a-z0-9]+(-[a-z0-9]+)*$`
* No duplicate or redundant variables 
* Disallowed redundant nested selectors 
* Classnames will use BEM naming convention
* Maximum number of compound selectors is 2 
* In order to enforce the usage of class names, no ID selectors will be allowed
* No types will be allowed to be used as selectors either 
* Double quotations will be used for strings 
* Required newline or disallow whitespace after the commas of value lists.
