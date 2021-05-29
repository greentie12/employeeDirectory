const SEARCH_URL = "https://randomuser.me/api/?nat=us&results=12";

const main = document.getElementById("main");
const dialog = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

let employeeArr = [];

retreiveEmployees(SEARCH_URL);

async function retreiveEmployees(url) {
  const response = await fetch(url);
  const data = await response.json();

  appendEmployees(data.results);
}

function appendEmployees(employees) {
  employeeArr = employees;
  console.log(employeeArr);

  employeeArr.forEach((employee, index) => {
    let { name, email, location, picture } = employee;
    let fullName = `${name.first} ${name.last}`;
    let employeeArticle = document.createElement("article");

    employeeArticle.classList.add("card");
    employeeArticle.setAttribute("data-index", `${index}`);

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

const displayModal = (index) => {
  let {
    name,
    dob,
    phone,
    email,
    location: { city, street, state, postcode },
    picture,
  } = employeeArr[index];

  let fullName = `${name.first} ${name.last}`;
  let fullAddress = `${street}, ${state} ${postcode}`;
  let editDob = new Date(dob.date);
  editDob = `${editDob.getMonth()}/${editDob.getMonth()}/${editDob.getMonth()}`;

  dialog.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="modal-info">
        <img src="${picture.large}" alt="${fullName}" />
        <h4>${fullName}</h4>
        <p>${email}</p>
        <p>${city}</p>
        <div class="line-break"></div>
        <p>${phone}</p>
        <p>${fullAddress}</p>
        <p>Birthday: ${editDob}/</p>
      </div>
    </div>
  `;
  modal.style.display = "block";
};

const mainEvent = (e) => {
  if (e.target !== main) {
    let card = e.target.closest(".card");
    let index = card.getAttribute("data-index");
    console.log(card);
    displayModal(index);
  }
};

main.addEventListener("click", mainEvent);

// Modal Popup action below
// Get the modal
var modal = document.querySelector(".modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

dialog.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    modal.style.display = "none";
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
