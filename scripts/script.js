document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.id = "pointer";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0"; // Hide cursor when mouse leaves window
    });

    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1"; // Show cursor when mouse enters window
    });

    document.addEventListener("mousedown", () => {
        cursor.classList.add("click-effect");
        setTimeout(() => {
            cursor.classList.remove("click-effect");
        }, 300); // Glow effect lasts 200ms
    });
});
