/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);

   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex  && i < endIndex ) {
         const li = document.createElement('li');
         li.classList.add('student-item', 'cf');
         li.innerHTML = `
         <div class="student-details">
         <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
         <h3>${data[i].name.first} ${data[i].name.last}</h3>
         <span class="email">${data[i].email}</span>
       </div>
       <div class="joined-details">
         <span class="date">Joined ${data[i].registered.date}</span>
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

function addPagination (list) {
   const paginationBtns = list.length / 9;
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   for (let i= 0; i < paginationBtns; i++) {
      let page = 1 + i;
     const li = `
     <li>
        <button type="button">${page}</button>
     </li>
  ` ;
      linkList.insertAdjacentHTML('beforeend', li);
   }

   buttons = linkList.querySelectorAll('li button');
   firstPageBtn = buttons[0];
   firstPageBtn.className = 'active';  
   linkList.addEventListener('click', (event) => {
      const eventTarget = event.target;
      if (eventTarget.type === 'button') {
         for (const button of buttons) {
            button.classList.remove('active')
            eventTarget.classList.add('active')
          }         
         const pageNumber = eventTarget.textContent;
         showPage (list, pageNumber)
      }
   });
}


// // Call functions

showPage (data, 1)
addPagination (data)

/*
Extra Credit: Search bar
*/

// function createElement(elementName, property, value) {
//    const element = document.createElement(elementName);
//    element[property] = value;
//    return element;
// }

const header = document.querySelector('.header');

const label = document.createElement('label');
label.setAttribute('for', 'search');
label.classList.add('student-search');

const searchBar = document.createElement('input');
searchBar.id = 'search';
searchBar.placeholder = 'search by name...';

const searchButton = document.createElement('button');
searchButton.type = 'button';

const img = document.createElement('img');
img.src = 'img/icn-search.svg';
img.alt = 'Search icon';


const span = document.createElement('span');
span.textContent = 'Search by name';

searchButton.appendChild(img);
label.append(span, searchBar, searchButton);
header.insertAdjacentElement('beforeend', label);

//keyup event listener to list filters in real-time as the user types
searchBar.addEventListener('keyup', (event) => {
   const input = event.target;
   console.log(input.value);
});
