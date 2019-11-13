"use strict"

function Product(name, price, date) {
    this.productID = Math.round(Math.random() * 20000 + 19000);
    this.name = name;
    this.price = price;
    this.expirationDate = new Date(date);
}

Product.prototype.getInfo = function() {
    return '' + this.name + ' ->' + ' ' + this.productID + ', ' + this.name + ', ' + this.price;
}


var banana = new Product('Banana', '123', '01.01.2020');

console.log(banana.getInfo());