// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(driver_name){
  return drivers.filter(function(name){return name == driver_name})
}
