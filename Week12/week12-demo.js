// document.querySelector('button');
// document.querySelector('.new-quote button');
function getQuote() {
  console.log("quote button was clicked"); //Used for Debugging "Inspect"
  try{
    const response = await fetch(endpoint);
    if (!response.ok) {          // if response is not okay, then...
      throw Error(response.statusText) // error we want to appear in console
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.fact);
  } catch(err) {
    console.log(err)
    alert("Failed");
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text')
  quoteText.textContent = quote;
}

const endpoint = "https://catfact.ninja/fact";

const quoteButton = document.querySelector("#js-new-quote");
quoteButton.addEventListener("click", getQuote);
