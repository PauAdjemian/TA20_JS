const image = document.getElementById("foto1");
const originalSrc = image.src;
const hoverSrc = "https://picsum.photos/200/300?grayscale";

image.addEventListener("mouseover", () => {
    image.src = hoverSrc;
});

image.addEventListener("mouseout", () => {
    image.src = originalSrc;
});
