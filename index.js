// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(element) {
    return element.toLowerCase();
  })
}

const drivers = [
  'Bobby Smith',
  'Sammy Watkins',
  'Sally Jenkins',
  'Annette Sawyer',
  'Sarah Hucklebee',
  'bobby ridge'
];

function nameToAttributes(array) {
  return array.map(function(element){
    const firstNameDriver = element.split(" ")[0];
    const lastNameDriver = element.split(" ")[1];

    return {firstName: firstNameDriver, lastName: lastNameDriver}
  });
}

nameToAttributes(drivers)

function attributesToPhrase(attributes){
  return attributes.map(function(element){

    return "${element.name} is from ${element.hometown}"

  });
}
