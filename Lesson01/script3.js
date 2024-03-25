const exponentiation = (base, exponent) => {
    if (typeof base !== 'number' || typeof exponent !== 'number')
        return NaN;

    if (exponent > 0) return base * exponentiation(base, exponent
        - 1);

    return 1;
}

const result = exponentiation(4, 5); 
console.log(result);
