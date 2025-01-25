const pairNumbers = (min, max) => {
    let calc = []

    for (let i=min; i<=max; i++) {
        if (i % 2 === 0) {
            calc.push(i)
        }
    }
    return calc.join(',')
}
console.log(pairNumbers(1,10))