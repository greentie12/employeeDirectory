const SEARCH_URL = "https://randomuser.me/api/?nat=us&results=12";

const main = document.getElementById("main");

retreiveEmployees(SEARCH_URL);

async function retreiveEmployees(url) {
  const response = await fetch(url);
  const data = await response.json();

  appendEmployees(data.results);
}

function appendEmployees(employees) {
  //   main.innerHTML = "";

  employees.forEach((employee) => {
    const { name, email, location, picture } = employee;
    const fullName = `${name.first} ${name.last}`;
    const employeeArticle = document.createElement("article");

    employeeArticle.classList.add("card");

    employeeArticle.innerHTML = `
	<div class="emp-avatar">
	  	<img src="${picture.large}" alt="image of ${fullName}" />
	</div>
	<div class="emp-info">
		<h4 class="emp-name">${fullName}</h4>
		<p>${email}</p>
		<p>${location.state}</p>
	</div>
  	`;
    main.appendChild(employeeArticle);
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
