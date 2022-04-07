// document.querySelector('button');
// document.querySelector('.new-quote button');

async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.content);
    // displayAuthor(json.author);
  }catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'https://api.quotable.io/random';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote)


// async function getAuthor() {
//   console.log("quote button was clicked");
//   try {
//     const response = await fetch(endpoint);
//     if (!response.ok) {
//       throw Error(response.statusText)
//     }
//
//     const json = await response.json();
//     console.log(json);
//     displayAuthor(json.author);
//   }catch(err) {
//     console.log(err)
//     alert('Failed');
//   }
// }
//
// function displayAuthor(author) {
//   const authorText = document.querySelector('#js-author-text');
//   authorText.textContent = author;
// }
//
// const endpoint = 'https://api.quotable.io/random';
// const quoteButton = document.querySelector('#js-new-quote');
// quoteButton.addEventListener('click', getAuthor)
