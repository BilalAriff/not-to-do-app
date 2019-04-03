
// Referencing to my list

const myList = document.getElementById('list');

// Delete Task

myList.addEventListener('click', function(e) {
  if(e.target.className == 'waves-effect waves-light btn-small delete') {
    const li = e.target.parentElement;
    myList.removeChild(li);
  }
})

// Add New Item in the List

const newTaskForm = document.forms['new-task-form'];

newTaskForm.addEventListener('submit', function(e){
  e.preventDefault(); //Preventing Default submit behavior
  // Storing values from input fields
  var title = newTaskForm.querySelector('#title').value;
  var subTitle = newTaskForm.querySelector('#subtitle').value;
  var details = newTaskForm.querySelector('#detail').value;


  // Creating Elements
  const list = document.createElement('li');
  const TITLE = document.createElement('h3');
  const SUBTITLE = document.createElement('h4');
  const DETAILS = document.createElement('p');
  const DELETEBTN = document.createElement('button');

  // Adding Content
  TITLE.textContent = title;
  SUBTITLE.textContent = subTitle;
  DETAILS.textContent = details;
  DELETEBTN.innerHTML = "Delete";

  // adding Classes
  DELETEBTN.className = "waves-effect waves-light btn-small delete";

  // Adding to the list
  list.appendChild(TITLE);
  list.appendChild(SUBTITLE);
  list.appendChild(DETAILS);
  list.appendChild(DELETEBTN);
  myList.appendChild(list);
})


// WAtCH


function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "PM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "AM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();