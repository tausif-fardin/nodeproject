//local
const secret = "Super secret";

//Share
const john = "John";
const peter = "Peter";

// module.exports to export the objects
module.exports = { john, peter }

const sayHi = (name) => {
    console.log(`Hi ${name}`)
}
//export functions
module.exports = sayHi;

