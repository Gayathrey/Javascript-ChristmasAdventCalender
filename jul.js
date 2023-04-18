let items = document.querySelectorAll(".item");
let dataOpen = [];
if (localStorage.days) {
  console.log("local storage detected");
}

let date = new Date();
let currentDate = date.getDate();
// console.log(currentDate);
//TEST (HUSK AT UDKOMMENTERE)

function clickHandler(event) {
  console.log(this.dataset.open);
  if (currentDate >= this.dataset.date) {
    this.classList.toggle("open");
    // this.classList.add("open");
    this.dataset.open = "true";
    localStorage.setItem("days, JSON.stringify"(dataOpen));
  }

  // if(currentDate >= index){
  // }
  else {
    alert("Whoa whoa you. Don't open this gate yet!");
  }
}

items.forEach(function (element, index) {
  element.addEventListener("click", clickHandler);
  dataOpen.push(element.dataset.open);
});

// for (let index = 1; index <= 24; index ++){
//     console.log("index");

// }
