document.addEventListener("DOMContentLoaded", () => {
    const capacityInput = document.getElementById("capacity");
    const loadInput = document.getElementById("load");
    const resultMessage = document.getElementById("result-message");

    function calculateBatteryLife() {
        const capacity = parseFloat(capacityInput.value);
        const load = parseFloat(loadInput.value);

        if (!isNaN(capacity) && !isNaN(load) && load > 0) {
            const batteryLife = capacity / load;
            resultMessage.textContent = `Battery Life: ${batteryLife.toFixed(2)} hours`;
        } else {
            resultMessage.textContent = `Please provide valid input values.`;
        }
    }

    capacityInput.addEventListener("input", calculateBatteryLife);
    loadInput.addEventListener("input", calculateBatteryLife);
});
