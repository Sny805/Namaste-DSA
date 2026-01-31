let n = -12134

function reverse(n) {
    let rev = 0;
    let xCopy = n;
    n = Math.abs(n)
    while (n > 0) {
        rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10)
    }

    let limit = Math.pow(2, 31)

    if (rev < -limit || rev > limit)
        return 0;

    return (xCopy < 0) ? -rev : rev;


}



console.log(reverse(n));