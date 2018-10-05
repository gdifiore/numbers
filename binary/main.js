function toBinary() {
    var decimal = document.getElementById('toBinary').value;

    var bin = parseInt(decimal,10).toString(2);
    document.getElementById('toResult').innerHTML = bin;
}

function fromBinary() {
    var binary = document.getElementById('fromBinary').value;

    var dec = parseInt(binary,2).toString(10);
    document.getElementById('fromResult').innerHTML = dec;
}