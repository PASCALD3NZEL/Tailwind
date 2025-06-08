// 1. returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers
function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(drivers));  // ['Amari', 'Mo']
console.log(fareDoubler(10));                // 20
console.log(fareTripler(10));                // 30
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']

module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};
