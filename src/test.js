//function currying

const add = (a) => {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}

const lebel = add(1);
console.log(lebel(7)(9));
console.log(lebel(7)(10));