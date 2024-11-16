document.addEventListener("DOMContentLoaded", () => {
    const voltageInput = document.getElementById('voltage');
    const currentInput = document.getElementById('current');
    const resistanceInput = document.getElementById('resistance');
    const resultMessage = document.getElementById('result-message');

    function calculateOhmsLaw() {
        const voltage = parseFloat(voltageInput.value);
        const current = parseFloat(currentInput.value);
        const resistance = parseFloat(resistanceInput.value);

        if (!isNaN(voltage) && !isNaN(current)) {
            resistanceInput.value = (voltage / current).toFixed(2);
            resultMessage.textContent = `Calculated Resistance: ${resistanceInput.value} Ω`;
        } else if (!isNaN(voltage) && !isNaN(resistance)) {
            currentInput.value = (voltage / resistance).toFixed(2);
            resultMessage.textContent = `Calculated Current: ${currentInput.value} A`;
        } else if (!isNaN(current) && !isNaN(resistance)) {
            voltageInput.value = (current * resistance).toFixed(2);
            resultMessage.textContent = `Calculated Voltage: ${voltageInput.value} V`;
        } else {
            resultMessage.textContent = `Fill two fields to calculate the third.`;
        }
    }

    voltageInput.addEventListener('input', calculateOhmsLaw);
    currentInput.addEventListener('input', calculateOhmsLaw);
    resistanceInput.addEventListener('input', calculateOhmsLaw);
});
function performCalculation() {
    const capacity = parseFloat(document.getElementById('capacity').value);
    const load = parseFloat(document.getElementById('load').value);

    if (!isNaN(capacity) && !isNaN(load)) {
        const batteryLife = capacity / load;
        document.getElementById('result-message').textContent = `Battery Life: ${batteryLife.toFixed(2)} hours`;
    } else {
        document.getElementById('result-message').textContent = `Please fill in both fields.`;
    }
}
function performCalculation() {
    const inputVoltage = parseFloat(document.getElementById('inputVoltage').value);
    const outputVoltage = 5; // Assume constant for example
    const current = parseFloat(document.getElementById('loadCurrent').value);

    if (!isNaN(inputVoltage) && !isNaN(current)) {
        const powerDissipation = (inputVoltage - outputVoltage) * current;
        document.getElementById('result-message').textContent = `Power Dissipation: ${powerDissipation.toFixed(2)} W`;
    } else {
        document.getElementById('result-message').textContent = `Please fill in all fields.`;
    }
}
