# 🌍 Currency Exchange Website


A simple and interactive **Currency Exchange Website** that allows users to convert currencies in real-time using an external API. The website fetches live exchange rates and performs instant conversions based on user input.

---

## 🚀 Features
- 🔄 **Real-time exchange rates** using a live API
- 🎨 **Modern and responsive UI** built with HTML, CSS, and JavaScript
- 🔥 **Instant calculations** based on user input
- 🏳 **Dynamic country flag updates** based on selected currencies
- 📊 **Accurate conversion values** displayed clearly

---



## 🛠️ Technologies Used
<p align="center">  
  <img src="https://skillicons.dev/icons?i=js,html,css,git,github,vscode" alt="Tech Stack" />  
</p>

---

## 🔧 Setup & Installation
### Prerequisites
- A web browser (Chrome, Firefox, Edge, etc.)
- A text editor (VS Code, Sublime, etc.)
- Basic knowledge of HTML, CSS, and JavaScript



## 📜 Code Overview
### API Integration
The website uses an **Exchange Rate API** to fetch live conversion rates:
```js
const BASE_URL = "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest";
fetch(`${BASE_URL}/USD`)
  .then(response => response.json())
  .then(data => console.log(data.conversion_rates));
```

### Currency Conversion Logic
```js
const updateExchangeRate = async () => {
    let amtVal = amount.value || 1;
    const URL = `${BASE_URL}/${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value];
    final_msg.innerText = `${amtVal} ${fromCurr.value} = ${(amtVal * rate).toFixed(2)} ${toCurr.value}`;
};
```

---

## 🎨 UI Components
- **Dropdowns** to select currencies
- **Input field** to enter an amount
- **Exchange button** to trigger conversion
- **Dynamic flag updates** for selected currencies
- **Live result display** for converted amount

---




## 📬 Contact
For any issues or suggestions, feel free to reach out:
- 🐙 GitHub: [SGcpu](https://github.com/SGcpu)

---

💡 **Made with ❤️ by SG**

