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

   const studentList = document.querySelector('.student-list')
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

   const activeBtn = linkList.firstChild;
   activeBtn.className = 'active'
   
   linkList.addEventListener('click', (event) => {
      const eventTarget = event.target;
      if (eventTarget.type === 'button') {
         for (let i = 0; i < linkList.length; i++) {
            button.classList.remove('active');
          }
         eventTarget.classList.add('active');
         const pageNumber = eventTarget.textContent
         showPage (list, pageNumber)
      }
   });
}


// // Call functions

showPage (data, 1)
addPagination (data)