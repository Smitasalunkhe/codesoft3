function appendDisplay(value) {
    document.getElementById('displayin-outp').value += value;
}

function clearDisplayscreen() {
    document.getElementById('displayin-outp').value ='';
}

function calculate() {
    try {
        document.getElementById('displayin-outp').value = eval(document.getElementById('displayin-outp').value);
    } catch (error) {
        document.getElementById('displayin-outp').value = 'Error';
    }
}