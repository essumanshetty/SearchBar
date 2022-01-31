let main = document.querySelector("main");
let arr = [];
let search = document.getElementById("search");

search.addEventListener("focus", function (e) {
  document.querySelector(".resultContainer").style.display = "block";
});

let results = document.querySelectorAll(".result");
for (let i = 0; i < results.length; i++) {
  results[i].addEventListener("click", function (event) {
    console.log("clicked...", event.target.id);
    document.querySelector(".resultContainer").style.display = "none";
  });
}

window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      arr = data;
      data.map((item) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("cardHeader");
        cardHeader.textContent = item.title;

        let cardBody = document.createElement("div");
        cardBody.classList.add("cardBody");
        cardBody.textContent = item.body;

        card.append(cardHeader);
        card.append(cardBody);

        main.append(card);
      });
    })
    .catch((err) => console.log(err));
};
