function maxProfit(prices: number[]): number {
    let p1= 0
    let p2= 1
    let p1v= prices[p1]
    let max = 0;
    for(p2;p2<prices.length;p2++){
        let profit = prices[p2]-p1v
        max = Math.max(profit,max)
        p1v = Math.min(p1v,prices[p2])
    }
    return max
};
