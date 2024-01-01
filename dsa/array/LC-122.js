// 122. Best Time to Buy and Sell Stock II

const maxProfit = (prices) => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (i < prices.length && prices[i] < prices[i + 1]) {
      maxProfit = maxProfit + prices[i + 1] - prices[i];
    }
  }
  return maxProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
