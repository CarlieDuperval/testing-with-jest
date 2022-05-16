

const sum2 = (a, b) => {
    if (typeof(a) !== "number" || typeof(b) !== "number") {
        return "Bad Input";
    }
    return a + b;
}

export {sum2};

// CHANGE THE FUNCTION TO RETURN A SUM IF  A > B OR THE DIFFERENCE


const sum = (a, b) => {
    if (typeof(a) !== "number" || typeof(b) !== "number") {
        return "Bad Input";
    }
    if(a  < b) {
        return b - a
    }
    return a + b;
}
export default sum;

