// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let h1 = document.createElement('h1');
    let span2 = document.createElement('span');

    div.classList.add('header');
    span.classList.add('date');
    span2.classList.add('temp');

    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span2);

    span.textContent = "MARCH 28, 2019";
    h1.textContent = "Lambda Times";
    span2.textContent = "98°";

    return div
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header())