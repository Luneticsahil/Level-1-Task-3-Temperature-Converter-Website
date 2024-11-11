function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");
    const outputLabel = document.getElementById("output-label");

    if (isNaN(temperature)) {
        result.value = "Please enter a valid number.";
        return;
    }

    let convertedTemp;
    let convertedUnit;

    if (unit === "celsius") {
        convertedTemp = `${(temperature * 9/5) + 32} °F`;
        convertedUnit = `${temperature + 273.15} K`;
    } else if (unit === "fahrenheit") {
        convertedTemp = `${(temperature - 32) * 5/9} °C`;
        convertedUnit = `${(temperature - 32) * 5/9 + 273.15} K`;
    } else if (unit === "kelvin") {
        convertedTemp = `${temperature - 273.15} °C`;
        convertedUnit = `${(temperature - 273.15) * 9/5 + 32} °F`;
    }
    
    result.value = `${convertedTemp} and ${convertedUnit}`;
    outputLabel.style.display = "block";
}

function clearFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("result").value = "";
}
