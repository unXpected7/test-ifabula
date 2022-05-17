// NO.1
const multiple = (num) => {
    for (let i = 50; i <= 100; i++) {
        if (i % num === 0) {
            if(i <= 60){
                console.log(i + 'Kurang');
            }else if(i <= 70 && i > 60){
                console.log(i + 'Cukup');
            }else if(i <= 80 && i > 70){
                console.log(i + 'Baik');
            }else if(i > 80){
                console.log(i + 'Luar Biasa');
            }
        }
    }
}
console.log(multiple(5));

//NO.2
// make function fibonacci 20
const fibonacci = (num) => {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}
fibonacci(20);

//NO.3
const star = (num) => {
    let a = "";
    for (let i = 0; i < num; i++) {
        a = a + "*";
        console.log(a);
    }
}
star(3);

//NO.4
// make function random 4 digit number more than 2000
const random = () => {
    let a = Math.floor(Math.random() * (9999 - 2000)) + 2000;
    console.log(a);
}
random();