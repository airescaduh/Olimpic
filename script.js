const btn = document.getElementById("switch");
let main = document.querySelector("main");
btn.addEventListener("change", (e) => {
    main.classList.toggle("dark", e.target.checked);
})