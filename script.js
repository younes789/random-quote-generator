const btn = document.querySelector("button");
const text = document.querySelector("#quote");
const author = document.querySelector(".author");

let quotes = [];

function selectQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quotes = data;
      let randomnbr = Math.floor(Math.random() * quotes.length);
      let quote = quotes[randomnbr];
      text.textContent = quote.text;
      author.textContent = quote.author== null? "inconnu" : quote.author;
    });

  // console.log(quote);
}
selectQuote();
btn.addEventListener("click", function () {
  selectQuote();
});
