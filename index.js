// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr,driver_name){
  return arr.filter(function(name){return name.toLowerCase() == driver_name.toLowerCase()})
}
