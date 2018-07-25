// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driver_name){
  debugger
  return drivers.filter(function(name){return name.toLowerCase() == driver_name.toLowerCase()})
}
