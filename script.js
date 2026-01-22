function flipCoin(event) {
    const coin = document.querySelector(".coin-container");
    const resultDiv = document.getElementById("result");
    const image = document.querySelector(".coin-image");

    // Reset
    resultDiv.classList.remove("show-result");
    resultDiv.style.opacity = 0;
    image.style.opacity = 1;

    // Click position logic
    const clickX = event.clientX;
    const screenWidth = window.innerWidth;

    let result;
    let bgColor;

    if (clickX < screenWidth / 2) {
        result = "Tails";
        bgColor = "#3498db";
    } else {
        result = "Heads";
        bgColor = "#2ecc71";
    }

    document.body.style.backgroundColor = bgColor;

    // Flip coin
    coin.classList.add("flip");

    // Show result after flip
    setTimeout(() => {
        image.style.opacity = 0;
        resultDiv.textContent = result;
        resultDiv.classList.add("show-result");
        resultDiv.style.opacity = 1;
    }, 800);

    // Reset animation
    setTimeout(() => {
        coin.classList.remove("flip");
    }, 1000);
}
