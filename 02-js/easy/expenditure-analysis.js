/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code cby running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const totals = {};

  for (const transaction of transactions) {
    if (!totals[transaction.category]) {
      totals[transaction.category] = 0;
    }
    totals[transaction.category] += transaction.price;
  }

  return Object.keys(totals).map((category) => ({
    category: category,
    totalSpent: totals[category],
  }));
}

module.exports = calculateTotalSpentByCategory;
