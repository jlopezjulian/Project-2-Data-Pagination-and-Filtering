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
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//const studentsPerPage = 9;

// startIndex = (page * 9) - 9;
// endIndex = (page * 9);

// studentsPerPage.

function showPage(list, page){
   startIndex = (page * 9) - 9;
   endIndex = page * 9;
};


const studentList = document.querySelector(".student-list");
studentList.innerHTML = " ";

for (i=0; i< list.length; i++ ){
   if (i>= startIndex && i <= endIndex){
      let studentItem =  
        <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src= ${list[i].picture.large} alt="Profile Picture">
               <h3> ${list[i].name.first} , ${list[i].name.last} </h3>;
               <span class= ${list[i].email} ></span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date} </span>
         </div>
      </li>
      }
   };

studentList.innerAdjacentHTML(beforeend, "studentItem");

showPage(data, 1);


{/* {/* //console.log(firstName);
// } */}
/* */}
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
