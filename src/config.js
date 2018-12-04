const daysOfWeek = [ 
  'Sunday', 
  'Monday', 
  'Tuesday', 
  'Wednesday', 
  'Thursday', 
  'Friday', 
  'Saturday' 
];

const monthsOfYear = [ 
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export let dictionary = { 
  daysOfWeek, 
  monthsOfYear
}

export const extendDictionary = (conf) => 
  Object.keys(conf).forEach(key => {
    if(dictionary[key] && dictionary[key].length == conf[key].length) {
      dictionary[key] = conf[key];
    }
  });

export const resetDictionary = () => extendDictionary({daysOfWeek,monthsOfYear});