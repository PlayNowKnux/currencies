
// Structure: (x, item 2) USD = 1 (name, item 1)
const currencies = {
    "United States Dollars": 1,
    "Canadian Dollars": 0.78,
    "Great British Pound": 1.33,
    "Euros": 1.14,
    "Dark Dollars": (1/4),
    "Playcoins": 1000,
    "PokePoints": (1/30),
    "Food Lions": 500,
    //"Getgo FuelPerks": 1.385,
    "Credits": (1/100),
    "osu! Performance Points": 71.72,
    "Chucky Coins": (1/500),
    "Freddy Points": 1.29,
    "Disney Ticket": 76,
    "Cement Coin": 0.23,
    "Zerifunds": 2000

}

//https://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding/32605063#32605063
function roundTo(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }

    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return Math.round(n) / multiplicator;
}

var curAmt = 1; // amount of money being converted in usd

function el(element) {
    return document.getElementById(element);
}

function val(element) {
    return el(element).value;
}

function fact() {
    const facts = [
        "2 Food Lions are equivalent to 1 playcoin!",
        "Invest well and you could even p",
        "AAAAAAAAAAAAAAAAH!",
        "When you catch a Pokemons, you get 15 PokePoints, or 50 US cents!",
        "Cookiezi has over 15153 pp, which is more than 1000 playcoins!",
        "I am friendly_businessman.png"
    ];
    var randomFact = facts[Math.floor(Math.random() * facts.length)];
    el("fact").innerText = randomFact;
}

function toUSD(amt, currency) {
    // amt over currency key
    curAmt = amt * currencies[currency];
}

function convert(currency) {
    // set up a base conversion
    toUSD(
        parseFloat(
            val(currency + "-value")), currency);
    for (let i in currencies) {
        try {
            el(i + "-value").value =  roundTo(curAmt/currencies[i], 2);
        } catch(e) {
            console.log("Does not exist...")
            continue;
        }
    }
}

function create(currency) {
    data = `
    <div class="currencyUnit" id="${currency}">
        <p class="center">${currency}</p>
        <div class="inputbox">
            <input type="text" id="${currency}-value" value=1>
            <input type="button" value="Convert" onclick="convert('${currency}')">
        </div>
    </div>
    `

    el("currencyCont").innerHTML += data;
}

for (let i in currencies) {
    create(i);
}

convert("United States Dollars")
