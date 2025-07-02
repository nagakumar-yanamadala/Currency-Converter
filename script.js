const currencyCodes = [
  "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
  "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
  "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
  "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
  "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
  "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
  "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
  "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
  "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
  "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
  "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
  "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
  "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP",
  "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD",
  "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND",
  "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
];

const currencyToCountry = {
  AED: "ae", AFN: "af", ALL: "al", AMD: "am", ANG: "nl", AOA: "ao", ARS: "ar", AUD: "au",
  AWG: "aw", AZN: "az", BAM: "ba", BBD: "bb", BDT: "bd", BGN: "bg", BHD: "bh", BIF: "bi",
  BMD: "bm", BND: "bn", BOB: "bo", BRL: "br", BSD: "bs", BTN: "bt", BWP: "bw", BYN: "by",
  BZD: "bz", CAD: "ca", CDF: "cd", CHF: "ch", CLP: "cl", CNY: "cn", COP: "co", CRC: "cr",
  CUP: "cu", CVE: "cv", CZK: "cz", DJF: "dj", DKK: "dk", DOP: "do", DZD: "dz", EGP: "eg",
  ERN: "er", ETB: "et", EUR: "eu", FJD: "fj", FKP: "fk", FOK: "fo", GBP: "gb", GEL: "ge",
  GGP: "gg", GHS: "gh", GIP: "gi", GMD: "gm", GNF: "gn", GTQ: "gt", GYD: "gy", HKD: "hk",
  HNL: "hn", HRK: "hr", HTG: "ht", HUF: "hu", IDR: "id", ILS: "il", IMP: "im", INR: "in",
  IQD: "iq", IRR: "ir", ISK: "is", JEP: "je", JMD: "jm", JOD: "jo", JPY: "jp", KES: "ke",
  KGS: "kg", KHR: "kh", KID: "ki", KMF: "km", KRW: "kr", KWD: "kw", KYD: "ky", KZT: "kz",
  LAK: "la", LBP: "lb", LKR: "lk", LRD: "lr", LSL: "ls", LYD: "ly", MAD: "ma", MDL: "md",
  MGA: "mg", MKD: "mk", MMK: "mm", MNT: "mn", MOP: "mo", MRU: "mr", MUR: "mu", MVR: "mv",
  MWK: "mw", MXN: "mx", MYR: "my", MZN: "mz", NAD: "na", NGN: "ng", NIO: "ni", NOK: "no",
  NPR: "np", NZD: "nz", OMR: "om", PAB: "pa", PEN: "pe", PGK: "pg", PHP: "ph", PKR: "pk",
  PLN: "pl", PYG: "py", QAR: "qa", RON: "ro", RSD: "rs", RUB: "ru", RWF: "rw", SAR: "sa",
  SBD: "sb", SCR: "sc", SDG: "sd", SEK: "se", SGD: "sg", SHP: "sh", SLL: "sl", SOS: "so",
  SRD: "sr", SSP: "ss", STN: "st", SYP: "sy", SZL: "sz", THB: "th", TJS: "tj", TMT: "tm",
  TND: "tn", TOP: "to", TRY: "tr", TTD: "tt", TVD: "tv", TWD: "tw", TZS: "tz", UAH: "ua",
  UGX: "ug", USD: "us", UYU: "uy", UZS: "uz", VES: "ve", VND: "vn", VUV: "vu", WST: "ws",
  XAF: "cm", XCD: "ag", XOF: "bj", XPF: "pf", YER: "ye", ZAR: "za", ZMW: "zm", ZWL: "zw"
};

const form = document.getElementById('form');
const result = document.getElementById('result');
const fromDropdown = document.getElementById('dropdownListFrom');
const toDropdown = document.getElementById('dropdownListTo');
const customFrom = document.getElementById('customDropdownFrom');
const customTo = document.getElementById('customDropdownTo');


let selectedFrom = "USD";
let selectedTo = "INR";


function createDropdownItem(code) {
  const countryCode = currencyToCountry[code]?.toLowerCase() || "us";
  const li = document.createElement('li');
  li.className = 'flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer';
  li.innerHTML = `
    <div class="flex items-center gap-2">
      <img src="https://flagcdn.com/24x18/${countryCode}.png" alt="${code}" class="w-5 h-4" />
      <span class="text-sm font-medium">${code}</span>
    </div>
  `;
  return li;
}


currencyCodes.forEach(code => {
  const itemFrom = createDropdownItem(code);
  const itemTo = createDropdownItem(code);

  
  if (code === selectedFrom) {
    customFrom.innerHTML = itemFrom.innerHTML;
  }
  itemFrom.onclick = () => {
    selectedFrom = code;
    customFrom.innerHTML = itemFrom.innerHTML;
    fromDropdown.classList.add('hidden');
  };
  fromDropdown.appendChild(itemFrom);


  if (code === selectedTo) {
    customTo.innerHTML = itemTo.innerHTML;
  }
  itemTo.onclick = () => {
    selectedTo = code;
    customTo.innerHTML = itemTo.innerHTML;
    toDropdown.classList.add('hidden');
  };
  toDropdown.appendChild(itemTo);
});


customFrom.onclick = () => fromDropdown.classList.toggle('hidden');
customTo.onclick = () => toDropdown.classList.toggle('hidden');


const getCurr = async (event) => {
  event.preventDefault();
  const amount = document.getElementById('amount').value;

  if (!selectedFrom || !selectedTo) {
    alert("Please select both currencies.");
    return;
  }

  try {
    const res = await axios.get(`https://open.er-api.com/v6/latest/${selectedFrom}`);
    const rate = res.data.rates[selectedTo];
    const resultAmount = rate * amount;
    result.innerHTML = `${amount} ${selectedFrom} = ${resultAmount.toFixed(2)} ${selectedTo}`;
  } catch (err) {
    result.innerHTML = "Conversion failed. Try again later.";
    console.error(err);
  }
};

form.addEventListener('submit', getCurr);
