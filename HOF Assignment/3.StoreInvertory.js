const Inventory = () => {
    let Inr = 80;
    const USD = () => {
        let usd = 1;
        const calculate = () => {
            let answer = usd * Inr
            return answer
        }
        return usd;
    }
    return Inr
}
console.log('the exchange of indian rupees' + " " + Inventory());