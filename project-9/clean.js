"use strict "
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit =  user => spendingLimits[user] ? spendingLimits[user] : 0;

var addExpense = function (state,limit, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();
  const limit = getLimit(cleanUser);
  if (value <= limit) {
    // budget.push({ value: -value, description: description, user: user });
    return [...budget],{value: -value, description: description, user: cleanUser}
  }
};
addExpense(budget,spendingLimits,10, 'Pizza 🍕');
addExpense(budget,spendingLimits,110, 'Going to movies 🍿', 'Matilda');
addExpense(budget,spendingLimits,200, 'Stuff', 'Jay');
const checkExpenses = function () {
  for (const entry of budget) {
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // } 
    const limit = spendingLimits[entry.user] ? spendingLimits[entry.user] : 0;
    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    if (entry.value <= -bigLimit) {
      output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
console.log(budget);
logBigExpenses(1)