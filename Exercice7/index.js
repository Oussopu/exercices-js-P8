function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value
    const decimalNumber = parseInt(decimalInput, 10)
    const binaryResult = decimalToBinary(decimalNumber)

    document.getElementById('binaryResult').textContent = `Résultat en binaire : ${binaryResult}`
}


function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) return '0'

    let binary = ''
    while (decimalNumber > 0) {
        binary = (decimalNumber % 2) + binary
        decimalNumber = Math.floor(decimalNumber / 2)
    }
    return binary
}