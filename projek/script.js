// Fibonacci Calculator
const icon = document.getElementById("icon");
const menuList = document.getElementById("nav");
const ul = document.getElementById("ul");


icon.addEventListener("click", () => {
    menuList.classList.toggle("menuList");
})



icon.addEventListener("click", () => {
    ul.classList.toggle("ul2");
})





function calculateFibonacci() {
    const input = parseInt(document.getElementById("fibInput").value);

    if (input < 0) {
        document.getElementById("fibResult").textContent = "Input harus lebih besar dari atau sama dengan 0.";
        return;
    }

    const result = fibonacci(input);
    document.getElementById("fibResult").textContent = `Result: ${result}`;
}

function fibonacci(n) {
    if (n <= 1) return n;
    
    let a = 0;
    let b = 1;

    for (let i = 1; i < n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}


// Volume Calculator
function calculateVolume() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    
    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
        const volume = length * width * height;
        document.getElementById("volumeResult").textContent = `Volume: ${volume}`;
    } else {
        document.getElementById("volumeResult").textContent = "Invalid input";
    }
}
