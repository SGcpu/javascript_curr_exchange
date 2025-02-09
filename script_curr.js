import countryList from "./countrycodes.js";

const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".select select");

let leftflag = document.querySelector("#leftflag");

let rightflag = document.querySelector("#rightflag");

let exch_button = document.querySelector("#btn_exchange");

let final_msg = document.querySelector(".final_msg");

let fromCurr = document.querySelector(".from_container select");

let toCurr = document.querySelector(".to_container select");



for (let select of dropdowns) {
    for (let currCode in countryList) {
        let NewOption = document.createElement("option");
        NewOption.innerText = currCode;
        if (select.name === "from" && currCode === "USD") {
            NewOption.selected = "selected"
        } else if (select.name === "to" && currCode === "INR") {
            NewOption.selected = "selected"
        }
        select.append(NewOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    if (element.name === "from") {
        let countryCodeL = countryList[currCode]
        leftflag.innerHTML = `<img src="https://flagsapi.com/${countryCodeL}/flat/64.png">`
    }
    if (element.name === "to") {
        let countryCodeR = countryList[currCode]
        rightflag.innerHTML = `<img src="https://flagsapi.com/${countryCodeR}/flat/64.png">`
    }
}
exch_button.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
})
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    //final_msg.innerHTML = `<p>1${countryCodeL} = 80${countryCodeR}</p>`
    let response = await fetch(URL);
    console.log(response);
    let data = response.json;
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);

    let finalAmount = amtVal * rate;
    final_msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}
window.addEventListener("load", () => {
    updateExchangeRate();
});