// Code your solution in this file

/*function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}*/

function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase() === name.toLowerCase();
    })
}

//drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function fuzzyMatch(drivers, startLetters) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase().slice(0, startLetters.length) === startLetters.toLowerCase();
  })
}

//fuzzyMatch(drivers, 'Sa')

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return drivers.name.toLowerCase() === name.toLowerCase();
  })
}
