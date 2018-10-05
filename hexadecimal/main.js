function binToHex() {
    var binary = document.getElementById('binToHex').value;

    var hex = parseInt(binary,2).toString(16);
    document.getElementById('toResultHex').innerHTML = hex;
}

function hexToBin() {
    var hex = document.getElementById('hexToBin').value;

    var binary = parseInt(hex,16).toString(2);
    document.getElementById('fromResultHex').innerHTML = binary;
}