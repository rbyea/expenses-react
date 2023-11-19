export function totalBalance(incomeBalance, expensesBalance) {
  if (incomeBalance && expensesBalance) {
    const totalIncome = incomeBalance.reduce(
      (total, obj) => total + +obj.number,
      0
    );
    const totalExpenses = expensesBalance.reduce(
      (total, obj) => total + +obj.number,
      0
    );

    const resultBalance = totalIncome - totalExpenses;
    return resultBalance;
  } else {
    return null;
  }
}
