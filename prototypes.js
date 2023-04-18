Array.prototype.pow = function (n) {
    var array = [];
    this.forEach(function (x) {
        array.push(Math.pow(x, n));
    });
    return array;
}

const example = [1, 2, 3];
const result = example.pow(2);
console.log(result);


Function.prototype.defer = function (n) {
    const func = this 
   setTimeout(function() {
    func.apply()
   }, n);
}

function a() {
    alert("test");
}

a.defer(1000); 