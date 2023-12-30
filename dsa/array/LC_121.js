// 121.Best Time to Buy and Sell Stock

const maxProfit = (prices) => {
  let maxProfit = 0;
  let buy = Infinity;
  for (let i = 0; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    let profit = prices[i] - buy;
    maxProfit = Math.max(profit, maxProfit);
  }
  return maxProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
