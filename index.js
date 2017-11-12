// Code your solution in this file

function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

function findMatching(drivers, name) {
    return drivers.filter(function(driver) { 
      return driver.toLowerCase() === name.toLowerCase(); 
    })
}

function fuzzyMatch(drivers, startLetters) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase().indexOf(startLetters.toLowerCase()) > -1;
  })
}
