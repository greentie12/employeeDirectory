let input = document.getElementById("search");

function searchEmployees() {
  let data, txtValue;
  let filter = input.value.toUpperCase();
  let article = main.getElementsByTagName("article");
  let name = document.querySelectorAll(".emp-name");

  /*Loop through the cards h4.textContent, 
  and hide those who don't match the search query
  */
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
