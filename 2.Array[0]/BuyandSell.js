
prices = [7, 1, 5, 3, 6, 4]
var maxProfit = function (prices) {
    let min = prices[0];
    let maxProfit = 0;

    for (i = 1; i < prices.length; i++) {
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min
        }

        if (prices[i] < min) {
            min = prices[i];
        }
    }

    return maxProfit

};


console.log(maxProfit(prices));