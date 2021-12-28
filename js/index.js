let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormResult = document.querySelector(".form__result");
elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let day=elFormInput.value;
switch (day){
    case "1":
        elFormResult.textContent="Dushanba";
        break;
    case "2":
        elFormResult.textContent="Seshanba";
        break;
    case "3":
        elFormResult.textContent="Chorshanba";
        break;
    case "4":
        elFormResult.textContent="Payshanba";
        break;
    case "5":
        elFormResult.textContent="Juma";
        break;
    case "6":
        elFormResult.textContent="Shanba";
        break;
    case "7":
        elFormResult.textContent="Yakshanba";
        break;
    default:
        elFormResult.textContent="Iltimos 1-7 gacha bo`lgan raqamlarni kirirting"

}







})