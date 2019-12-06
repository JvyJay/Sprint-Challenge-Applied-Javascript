// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(item => {
        console.log(item)
        item.data.articles.bootstrap.forEach(item => {
            const newCard = Cards(item);
            cardContainer.appendChild(newCard);
        })
        item.data.articles.javascript.forEach(item => {
            const newCard = Cards(item);
            cardContainer.appendChild(newCard);
        })
        item.data.articles.jquery.forEach(item => {
            const newCard = Cards(item);
            cardContainer.appendChild(newCard);
        })
        item.data.articles.node.forEach(item => {
            const newCard = Cards(item);
            cardContainer.appendChild(newCard);
        })
    })

function Cards(arg) {
    let cardDiv = document.createElement('div');
    let headlineDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorDiv.appendChild(span);

    headlineDiv.textContent = arg.headline;
    img.src = arg.authorPhoto;
    span.textContent = arg.authorName;

    return cardDiv
}