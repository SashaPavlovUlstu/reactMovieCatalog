export function getUniqueNumber() {
    if (!getUniqueNumber.issuedNumbers) {
        getUniqueNumber.issuedNumbers = new Set();
    }

    const min = 301;
    const max = 309;

    while (true) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!getUniqueNumber.issuedNumbers.has(randomNumber)) {
            getUniqueNumber.issuedNumbers.add(randomNumber);
            return randomNumber;
        }

        if (getUniqueNumber.issuedNumbers.size === (max - min + 1)) {
            return null;
        }
    }
}


