const $btn = document.querySelector("#btn");

$btn.addEventListener("mouseover", () => {
    console.log("Me presionaste");
});

const $inpText = document.querySelector("#text");

$inpText.addEventListener("scroll", (e) => {
    console.log(e.target.value);
});

const $inputpassword = document.querySelector("#password");

$inputpassword.addEventListener("keydown", (e) => {
    console.log(e.target.value);
});