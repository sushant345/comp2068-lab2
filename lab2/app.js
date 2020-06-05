'use strict';

var http = require('http');




function calc() {

    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);

    var op = document.getElementById("opr").value;

    if (op === "add") {
        document.getElementById('result').value = x + y;
    }

    if (op === "sub") {
        document.getElementById('result').value = x - y;
    }

    if (op === "multi") {
        document.getElementById('result').value = x * y;
    }

    if (op === "div") {
        document.getElementById('result').value = x / y;
    }

}

       