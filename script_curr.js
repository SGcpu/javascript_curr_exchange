import countryList from "./countrycodes.js";

const BASE_URL = "https://v6.exchangerate-api.com/v6/e61312ef945aa66bab81fef2/latest";

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

    const URL = `${BASE_URL}/${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value];

    let finalAmount = (amtVal * rate).toFixed(2);
    final_msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

window.addEventListener("load", () => {
    updateExchangeRate();
});
amount.addEventListener("input", updateExchangeRate);