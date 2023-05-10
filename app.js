(function () {
    if (localStorage.getItem("lm") === "False") {
        document.body.classList.remove("light-mode");

    } else {
        document.body.classList.add("light-mode");


    }

    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        if (localStorage.getItem("lm") === "False") {
            document.body.classList.add("light-mode");
            localStorage.setItem("lm", "True")
        } else {
            document.body.classList.remove("light-mode");
            localStorage.setItem("lm", "False")

        }
    })
})();