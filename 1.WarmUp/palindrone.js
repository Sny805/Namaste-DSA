let n = 121

function palindrone(n) {

    if (n < 0) return false;

    let rev = 0;
    let match = n;

    while (n > 0) {
        rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10)
    }
    return match == rev;


}



console.log(palindrone(n));