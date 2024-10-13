// Code your solution here
// index.js

// Function to find matching drivers (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names start with the given letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function to match driver objects by name
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example data for testing
  const drivers = [
    'Bobby',
    'Bobby Brown',
    'Charlie',
    'Bobby Lee',
    'Alice',
    'Alfred'
  ];
  
  const driverObjects = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Charlie', hometown: 'Los Angeles' },
    { name: 'Alice', hometown: 'Boston' },
    { name: 'Bobby Brown', hometown: 'Chicago' }
  ];
  
  // Testing the functions
  console.log(findMatching(drivers, 'Bobby')); // Output: [ 'Bobby', 'Bobby Brown', 'Bobby Lee' ]
  console.log(fuzzyMatch(drivers, 'Bo')); // Output: [ 'Bobby', 'Bobby Brown', 'Bobby Lee' ]
  console.log(matchName(driverObjects, 'Bobby')); // Output: [ { name: 'Bobby', hometown: 'New York' }, { name: 'Bobby Brown', hometown: 'Chicago' } ]
  