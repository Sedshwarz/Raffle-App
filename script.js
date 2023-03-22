var items = document.querySelectorAll(".item");
var add = document.querySelector("#add");
var input = document.querySelector("#input");
var raffle = document.querySelector("#raffle");
var list = document.querySelector("#list");
var blackOut = document.querySelector(".blackOut");
var resultBox = document.querySelector(".resultBox");
var cards = document.querySelector(".cards");




add.onclick = function(){
  if (input.value.trim() != "") {
    var newLi = document.createElement("li");
    newLi.className = "item";
    newLi.innerText = input.value.trim();
    newLi.onclick = function(){this.remove();}
    list.appendChild(newLi);
    input.value = "";
    input.focus();
  }else {
    input.focus();
  }
}




raffle.onclick = function(){
  if (list.childElementCount <= 1) {
    input.focus();
  }else {

    var len = list.childElementCount;
    var array = [];
    var card = "";
    cards.innerHTML = "";

    for (var i = 0; i < len; i++) {
      array.push(list.children[i].innerText);
      array = array.sort(() => Math.random() - 0.5);
    }
    for (var j = 0; j < array.length; j++) {
      card += "<div class='card'><span class='plc'>" + Number(j+1) + "</span> <span class='name'>" + array[j] + "</span></div>";
    }

    cards.innerHTML = card;
    cards.children[0].classList.add("first");

    blackOut.classList.add("dBO");
    resultBox.classList.add("dRB");
  }
}

blackOut.onclick = function(){
  blackOut.classList.remove("dBO");
  resultBox.classList.remove("dRB");
}
