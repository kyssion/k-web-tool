const monster1 = { eyeCount: 4 };

const handler1 = {
    set(obj, prop, value) {
        console.log(obj , prop, value)
    }
};

const proxy1 = new Proxy(monster1, handler1);

proxy1.eyeCount = 1;
// Expected output: "Monsters must have an even number of eyes"

console.log(proxy1.eyeCount);
// Expected output: 4

proxy1.eyeCount = 2;
console.log(proxy1.eyeCount);
// Expected output: 2
