document.addEventListener("DOMContentLoaded", () => {
    const inputVoltageInput = document.getElementById("inputVoltage");
    const resistor1Input = document.getElementById("resistor1");
    const resistor2Input = document.getElementById("resistor2");
    const resultMessage = document.getElementById("result-message");

    function calculateOutputVoltage() {
        const inputVoltage = parseFloat(inputVoltageInput.value);
        const resistor1 = parseFloat(resistor1Input.value);
        const resistor2 = parseFloat(resistor2Input.value);

        if (!isNaN(inputVoltage) && !isNaN(resistor1) && !isNaN(resistor2) && resistor1 > 0 && resistor2 > 0) {
            const outputVoltage = (resistor2 / (resistor1 + resistor2)) * inputVoltage;
            resultMessage.textContent = `Output Voltage: ${outputVoltage.toFixed(2)} V`;
        } else {
            resultMessage.textContent = `Please provide valid input values.`;
        }
    }

    inputVoltageInput.addEventListener("input", calculateOutputVoltage);
    resistor1Input.addEventListener("input", calculateOutputVoltage);
    resistor2Input.addEventListener("input", calculateOutputVoltage);
});
