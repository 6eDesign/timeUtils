######6eDesign.net
## timeUtils.js
Time/date formatter for JavaScript which uses PHP-like syntax to easily format JavaScript date objects into legible, formatted, human-consumable strings.  It works in the browser and also in Node.js and is only 1.3KB (minified & gzipped). 

Using timeUtils.js is very simple: 

1. Include timeUtils.min.js on your page
2. Call timeUtils.formatDate(date, template); 

timeUtils.js expects a JavaScript Date object as its first argument and a string-based template as its second argument.  

The templates should take the following form: 
`"Lorem Ipsum '#{m}/#{d}/#{Y}'`

Where strings wrapped in `#{}` represent date/time variables which  will be formatted for you.  The below table shows all the variables currently available along with a brief description.  In the above example template, we would get date in the "mm/dd/yyyy" format - for example.

###Date Variables
Symbol/Token  | Description | Example(s)
------------- | ------------- | -------------
d | Day of the month, 2 digits, with leading zeros | 01, 02, ... 31
D | Textual representation of day of week, 3 letters | Sun, Mon, ... Sat
j | Day of month, without leading 0's | 1, 2, ... 31
l | Full textual representation of day of week | Sunday, Monday, ... Saturday
F | Full textual representation of the month | January, ... December
m | Numeric representation of the month with leading 0's | 01, 02, ... 12
M | Abbreviated textual representation of month, 3 letters | Jan, Feb, ... Dec
n | Numeric representation of month without leading 0's | 1, 2, ... 12
Y | Full numeric year, 4 digits | 2000, 2001, ... 2015
y | Short numeric year, 2 digits | 00, 01, ... 15

###Time Variables
Symbol/Token  | Description | Example(s)
------------- | ------------- | -------------
a | Lowercase ante meridiem and post meridiem | 'am' or 'pm'
A | Uppercase ante meridiem and post meridiem | 'AM' or 'PM'
g | 12-hour format of the hour, without leading 0's | 1, 2, ... 12
G | 24-hour format of the hour, without leading 0's | 0, 1, ... 23
h | 12-hour format of the hour, with leading 0's | 01, 02, ... 12
H | 24-hour format of the hour, with leading 0's | 00, 01, ... 23
i | Minutes with leading 0's | 00, 01, ... 59
s | Seconds with leading 0's | 00, 01, ... 59

###Examples
`var date = new Date()`

> Mon Apr 06 2015 21:51:08 GMT-0600 (Mountain Daylight Time)

`timeUtils.formatDate(date,'Your appointment is on #{l}, #{F} #{m}, #{Y} at #{g}:#{i} #{A}.')`

> "Your appointment is on Monday, April 04, 2015 at 9:48 PM."


### Using in Node.js

`var timeUtils = require('./timeUtils');
timeUtils.formatDate(new Date());`
> '04/06/2015'