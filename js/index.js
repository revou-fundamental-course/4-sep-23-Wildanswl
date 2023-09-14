function calculate() {
    const sideLength = parseFloat(document.getElementById("sideLength").value);
    const area = sideLength * sideLength;
    const perimeter = 4 * sideLength;

    document.getElementById("areaResult").textContent = area;
    document.getElementById("perimeterResult").textContent = perimeter;

    const calculateButton = document.querySelector(".calculate-button");
    calculateButton.classList.remove("entered");
    setTimeout(() => {
        calculateButton.classList.add("entered");
    }, 0);
}

function reset() {
    document.getElementById("sideLength").value = "";
    document.getElementById("areaResult").textContent = "";
    document.getElementById("perimeterResult").textContent = "";

    const resetButton = document.querySelector(".reset-button");
    resetButton.classList.remove("entered");
    setTimeout(() => {
        resetButton.classList.add("entered");
    }, 0);
}
