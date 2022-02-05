let main = document.querySelector("main");
let arr = [];
let search = document.getElementById("search");
let resultContainer = document.querySelector(".resultContainer");
let noMatch = document.querySelector("#noMatch");

search.addEventListener("focus", function (e) {
  resultContainer.style.display = "block";
});

search.addEventListener("focusout", function (e) {
  // resultContainer.style.display = "none";
  // noMatch.style.display = "none";
});

search.addEventListener("input", function (event) {
  resultContainer.innerHTML = ""; //Empty div on every inp[ut]
  // console.log(arr);

  arr.forEach(({ title, body }) => {
    // val = JSON.stringify(val);
    // console.log(title);
    if (
      title.includes(event.target.value) &&
      event.target.value != " " &&
      event.target.value != ""
    ) {
      // console.log(val);
      let resultDiv = document.createElement("div");
      resultDiv.classList.add("result");
      // resultDiv.id = title;
      // resultDiv.textContent = JSON.parse(val).title;
      resultDiv.textContent = title;
      resultContainer.append(resultDiv);
    } else {
      noMatch.style.display = "block";
    }
  });
  temp();
});

function temp() {
  let results = document.querySelectorAll(".result");

  for (let i = 0; i < results.length; i++) {
    results[i].addEventListener("click", function (event) {
      // console.log("clicked...", event.target.innerHTML);
      const current = document.getElementById(event.target.innerHTML);
      current.scrollIntoView();
      current.closest(".card").classList.add("blue");
      resultContainer.style.display = "none";
    });
  }
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
        cardHeader.id = item.title;

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
