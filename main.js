let form = document.querySelector("form");
let select = document.querySelector("select");
let textarea = document.querySelector("textarea");
let ul = document.querySelector("ul");
let review = document.querySelector(".review");
let deletereview = document.querySelector(".deletereviewlist");

let savereview = (e) => {
  e.preventDefault();

  let li = document.createElement("li");
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");
  let del = document.createElement("button");
  let save = document.createElement("li");
  let cross = document.createElement("button");

  li.className = "list";
  del.className = "delete";
  del.innerText = "delete";
  save.className = "list2";
  save.innerText = "your review is saved";
  cross.innerText = "X";
  cross.className = "cancel";

  ul.appendChild(li);
  li.appendChild(h1);
  li.appendChild(h2);
  li.appendChild(del);
  review.appendChild(save);
  save.appendChild(cross);

  h1.innerText = select.value;
  h2.innerText = textarea.value;

  form.reset();
};

let removereview = (e) => {
  if (e.target.className.includes("cancel")) {
    e.target.parentElement.remove();
  }
};

review.addEventListener("click", removereview);

ul.addEventListener(
  "click",
  (remove = (e) => {
    if (e.target.className.includes("delete")) {
      if (window.confirm("are you sure")) {
        let delreview = document.createElement("li");
        delreview.className = "deletereview";
        deletereview.appendChild(delreview);
        delreview.innerText = "your review delete";

        let cross2 = document.createElement("button");
        cross2.className = "cancel2";
        cross2.innerText = "X";
        delreview.appendChild(cross2);
        e.target.parentElement.remove();
        console.log(delreview);
      }
    }
  })
);

let removereview2 = (e) => {
  if (e.target.className.includes("cancel2")) {
    e.target.parentElement.remove();
  }
};

deletereview.addEventListener("click", removereview2);

form.addEventListener("submit", savereview);
