var iStatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    iStatus.innerHTML = "Friends";
    iStatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    btn.style.color = "#111";
    btn.style.backgroundColor = "#dadada";
    check = 1;
  } else {
    iStatus.innerHTML = "Stranger";
    iStatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.color = "#fff";
    btn.style.backgroundColor = "#5f9ea0";
    check = 0;
  }
});
