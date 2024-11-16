document.addEventListener("DOMContentLoaded", () => {
    const inputVoltageInput = document.getElementById("inputVoltage");
    const outputVoltageInput = document.getElementById("outputVoltage");
    const currentInput = document.getElementById("current");
    const resultMessage = document.getElementById("result-message");

    function calculatePowerDissipation() {
        const inputVoltage = parseFloat(inputVoltageInput.value);
        const outputVoltage = parseFloat(outputVoltageInput.value);
        const current = parseFloat(currentInput.value);

        if (!isNaN(inputVoltage) && !isNaN(outputVoltage) && !isNaN(current) && inputVoltage > outputVoltage) {
            const powerDissipation = (inputVoltage - outputVoltage) * current;
            resultMessage.textContent = `Power Dissipation: ${powerDissipation.toFixed(2)} W`;
        } else {
            resultMessage.textContent = `Please provide valid input values.`;
        }
    }

    inputVoltageInput.addEventListener("input", calculatePowerDissipation);
    outputVoltageInput.addEventListener("input", calculatePowerDissipation);
    currentInput.addEventListener("input", calculatePowerDissipation);
});
