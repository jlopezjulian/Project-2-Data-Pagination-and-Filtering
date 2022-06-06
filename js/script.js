/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//console.log("data");

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Created the `showPage` function
This function will create and insert/append the elements needed to display a "page" of 9 students
Parameters are list which refer to the data.js sheet, page which indicates what page number is displayed
*/


function showPage(list, page){
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

//created a variable where student data will be added 
   const studentList = document.querySelector(".student-list");
   studentList.innerHTML = '';
// for-loop is created to make the page dynamic, running each object in the list parameter 
   for (i=0; i< list.length; i++ ){
      if (i>= startIndex && i < endIndex){
         let studentItem =  
            `
            <li class="student-item cf">
                  <div class="student-details">
                     <img class= "avatar" src= ${list[i].picture.large} alt="Profile Picture"></img>
                     <h3> ${list[i].name.first} , ${list[i].name.last} </h3>
                     <span class= "email:"> ${list[i].email} </span>
                  </div>
                  <div class="joined-details">
                     <span class="date">Joined ${list[i].registered.date} </span>
                  </div>
            </li>
            `;
            studentList.insertAdjacentHTML("beforeend", studentItem);
         }
      }
   }

   showPage(data, 1);


// // * Created the `addPagination` function
// // // This function will create and insert/append the elements needed for the pagination buttons

function addPagination(list){
//      // variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector(".link-list")
   linkList.innerHTML = " ";
   
  // looped over the number of pages needed
    // created the elements needed to display the pagination button

   for (i=1; i <= numOfPages; i++){
   //template literal is created and inserted into the DOM 
      const button = 
         `
         <li>
            <button type= "button">${[i]}</button>
         </li>
         `;
         linkList.insertAdjacentHTML("beforeend", button);
         let activeButton = document.querySelector("li button");
         activeButton.className = "active";
      }
//created event listener to trigger click event from clicking on the button element 
      linkList.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON"){
           let pageClick = document.querySelector(".active");
           pageClick.className = "";
           event.target.className = "active";
           showPage(list, event.target.textContent);
        } 
      })
   }

//line 81 has a querySelector to avoiding doing a for-loop again since there is only 1 button with the active class
   addPagination(data);

