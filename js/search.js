let input = document.getElementById("search");

function searchEmployees() {
  // Declare variables
  let data, txtValue;
  console.log("sucess");

  let filter = input.value.toUpperCase();
  let article = main.getElementsByTagName("article");
  const location = document.querySelectorAll(".location");
  let name = document.querySelectorAll(".emp-name");

  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 0; i < article.length; i++) {
    data = article[i];

    if (data) {
      txtValue = name[i].textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        article[i].style.display = "";
      } else {
        article[i].style.display = "none";
      }
    }
  }
}
input.addEventListener("keyup", searchEmployees);
