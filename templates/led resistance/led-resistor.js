document.addEventListener("DOMContentLoaded", () => {
    const supplyVoltageInput = document.getElementById("supplyVoltage");
    const ledVoltageInput = document.getElementById("ledVoltage");
    const ledCurrentInput = document.getElementById("ledCurrent");
    const resultMessage = document.getElementById("result-message");

    function calculateResistorValue() {
        const supplyVoltage = parseFloat(supplyVoltageInput.value);
        const ledVoltage = parseFloat(ledVoltageInput.value);
        const ledCurrent = parseFloat(ledCurrentInput.value);

        if (!isNaN(supplyVoltage) && !isNaN(ledVoltage) && !isNaN(ledCurrent) && supplyVoltage > ledVoltage && ledCurrent > 0) {
            const resistorValue = (supplyVoltage - ledVoltage) / (ledCurrent / 1000); // Convert mA to A
            resultMessage.textContent = `Required Resistor Value: ${resistorValue.toFixed(2)} Ω`;
        } else {
            resultMessage.textContent = "Please enter valid input values.";
        }
    }

    supplyVoltageInput.addEventListener("input", calculateResistorValue);
    ledVoltageInput.addEventListener("input", calculateResistorValue);
    ledCurrentInput.addEventListener("input", calculateResistorValue);
});
