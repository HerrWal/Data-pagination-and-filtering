/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

//The function accept two parameters: "list" and "page".
function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   //We loop over the list parameter checking the indexes to display DOM elements 
   //needed for matching students
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex  && i < endIndex ) {
         const li = document.createElement('li');
         li.classList.add('student-item', 'cf');
         li.innerHTML = `
         <div class="student-details">
         <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
         <h3>${list[i].name.first} ${list[i].name.last}</h3>
         <span class="email">${list[i].email}</span>
       </div>
       <div class="joined-details">
         <span class="date">Joined ${list[i].registered.date}</span>
       </div>
         `;
         studentList.append(li);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// The function accept a single list parameter. And create pagination buttons
// ass needed. One page per 9 students, in this case.
function addPagination (list) {
   const paginationBtns = list.length / 9;
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   const pagination = document.querySelector('.pagination');
   pagination.removeAttribute('style');
   // We loop over the buttons to create DOM elements needed.
   for (let i= 0; i < paginationBtns; i++) {
      let page = 1 + i;
     const li = `
     <li>
        <button type="button">${page}</button>
     </li>
  ` ;
      linkList.insertAdjacentHTML('beforeend', li);
   }
   // Addition of functionality to the buttons.
   buttons = linkList.querySelectorAll('li button');
   firstPageBtn = buttons[0];
   firstPageBtn.className = 'active';  
   linkList.addEventListener('click', (event) => {
      const eventTarget = event.target;
      if (eventTarget.type === 'button') {
         for (const button of buttons) {
            button.classList.remove('active');
            eventTarget.classList.add('active');
          }         
         const pageNumber = eventTarget.textContent;
         showPage (list, pageNumber);
      }
   });
}

/*
Extra Credit: Search bar
*/

// DOM elements for a searchbar and a button and write JS to add functionality.

const header = document.querySelector('.header');
const label = createElement('label');
label.setAttribute('for', 'search');
label.classList.add('student-search');
const searchBar = createElement('input');
searchBar.id = 'search';
searchBar.placeholder = 'Search by name...';
const searchButton = createElement('button');
searchButton.type = 'button';
const img = createElement('img');
img.src = 'img/icn-search.svg';
img.alt = 'Search icon';
const span = createElement('span');
span.textContent = 'Search by name';

searchButton.appendChild(img);
label.append(span, searchBar, searchButton);
header.insertAdjacentElement('beforeend', label);

function createElement(elementName) {
   const element = document.createElement(elementName);
   return element;
}

// The function searchName to perform a search.
const searchName = () => {
const name = searchBar.value;
const searchResults = [];
   // Iteration of the list to compare the name match and push them to the results.
   for (let i = 0; i < data.length; i++) {
      const matchingName = `${data[i]['name']['first']} ${data[i]['name']['last']}`.toLocaleLowerCase();
      if (matchingName.includes(name.toLocaleLowerCase())) {
         searchResults.push(data[i]);
         showPage(searchResults, 1);
         addPagination(searchResults);
      }
      // If there are no results we print "No Results" to our search.
      if (searchResults == 0) {
         const ul = document.querySelector('.student-list');
         ul.innerHTML = `<li class="no-results"> 
                                    No Results...
                                 </li>`;
         const pagination = document.querySelector('.pagination');
         pagination.style.display = 'none';
      }   
   }
}

// keyup event listener to list filters in real-time as the user types the name. 
searchBar.addEventListener('submit', searchName);

searchButton.addEventListener('click', searchName);

searchBar.addEventListener('keyup', searchName);

showPage(data, 1);
addPagination(data);