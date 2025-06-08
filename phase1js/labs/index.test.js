// filepath: /home/d3nzel/phase1js/labs/index.test.js
const {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
} = require('./index');

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

test('returnFirstTwoDrivers returns first two drivers', () => {
  expect(returnFirstTwoDrivers(drivers)).toEqual(['Antonia', 'Nuru']);
});

test('returnLastTwoDrivers returns last two drivers', () => {
  expect(returnLastTwoDrivers(drivers)).toEqual(['Amari', 'Mo']);
});

test('fareDoubler doubles the fare', () => {
  expect(fareDoubler(10)).toBe(20);
});

test('fareTripler triples the fare', () => {
  expect(fareTripler(10)).toBe(30);
});

test('selectDifferentDrivers works with returnFirstTwoDrivers', () => {
  expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).toEqual(['Antonia', 'Nuru']);
});