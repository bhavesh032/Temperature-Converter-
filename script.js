function convert() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        result = (temperature * 9/5) + 32;
        document.getElementById('result').innerHTML = `${temperature}°C is ${result}°F`;
    } else {
        result = (temperature - 32) * 5/9;
        document.getElementById('result').innerHTML = `${temperature}°F is ${result}°C`;
    }
}
