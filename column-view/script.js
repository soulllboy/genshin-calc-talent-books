function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = clipboardData.getData("text/plain");
    // For some reson it does not prevent paste
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  // var regex = /[0-9]|\./;
  var regex = /[0-9]/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

var legOut = document.getElementById("output_legenfary");
var rareOut = document.getElementById("output_rare");
var commonOut = document.getElementById("output_common");
var legIn = document.getElementById("input_legenfary");
var rareIn = document.getElementById("input_rare");
var commonIn = document.getElementById("input_common");

var calcSum = function () {
  let strLine = legIn.value;
  let sum = 0;
  for (let i in strLine) {
    sum += parseInt(strLine[i]);
  }
  legOut.textContent = sum;

  strLine = rareIn.value;
  sum = 0;
  for (let i in strLine) {
    sum += parseInt(strLine[i]);
  }
  rareOut.textContent = sum;

  strLine = commonIn.value;
  sum = 0;
  for (let i in strLine) {
    sum += parseInt(strLine[i]);
  }
  commonOut.textContent = sum;
};

var convertToGold = function () {
  let rem_op = parseInt(commonOut.textContent) % 3;
  let mod_op = (parseInt(commonOut.textContent) - rem_op) / 3;
  commonOut.textContent = parseInt(commonOut.textContent) - mod_op * 3;
  rareOut.textContent = parseInt(rareOut.textContent) + mod_op;

  rem_op = parseInt(rareOut.textContent) % 3;
  mod_op = (parseInt(rareOut.textContent) - rem_op) / 3;
  rareOut.textContent = parseInt(rareOut.textContent) - mod_op * 3;
  legOut.textContent = parseInt(legOut.textContent) + mod_op;
};

var deductCommon = function () {
  if (parseInt(commonOut.textContent) >= 3) {
    commonOut.textContent = parseInt(commonOut.textContent) - 3;
    rareOut.textContent = parseInt(rareOut.textContent) + 1;
  }
};

var deductRare = function () {
  if (parseInt(rareOut.textContent) >= 3) {
    rareOut.textContent = parseInt(rareOut.textContent) - 3;
    legOut.textContent = parseInt(legOut.textContent) + 1;
  }
};

var deductLegendary = function () {
  if (parseInt(legOut.textContent) >= 1) {
    legOut.textContent = parseInt(legOut.textContent) - 1;
    rareOut.textContent = parseInt(rareOut.textContent) + 3;
  }
};

var addLegendary = function () {
  if (parseInt(rareOut.textContent) >= 3) {
    legOut.textContent = parseInt(legOut.textContent) + 1;
    rareOut.textContent = parseInt(rareOut.textContent) - 3;
  } else if (
    parseInt(rareOut.textContent) * 3 + parseInt(commonOut.textContent) >=
    9
  ) {
    legOut.textContent = parseInt(legOut.textContent) + 1;
    commonOut.textContent =
      parseInt(commonOut.textContent) - (3 - parseInt(rareOut.textContent)) * 3;
    rareOut.textContent = 0;
  }
};

var addRare = function () {
  if (parseInt(commonOut.textContent) >= 3) {
    rareOut.textContent = parseInt(rareOut.textContent) + 1;
    commonOut.textContent = parseInt(commonOut.textContent) - 3;
  } else if (parseInt(legOut.textContent) >= 1) {
    legOut.textContent = parseInt(legOut.textContent) - 1;
    rareOut.textContent = parseInt(rareOut.textContent) + 3;
  }
};

var addCommon = function () {
  if (parseInt(rareOut.textContent) >= 1) {
    rareOut.textContent = parseInt(rareOut.textContent) - 1;
    commonOut.textContent = parseInt(commonOut.textContent) + 3;
  } else if (parseInt(legOut.textContent) >= 1) {
    legOut.textContent = parseInt(legOut.textContent) - 1;
    rareOut.textContent = 2;
    commonOut.textContent = parseInt(commonOut.textContent) + 3;
  }
};

var resetAll = function () {
  legIn.value = null;
  legOut.textContent = "0";
  rareIn.value = null;
  rareOut.textContent = "0";
  commonIn.value = null;
  commonOut.textContent = "0";
};

// var logos = document.getElementsByClassName("company_logo");
// for (var i = 0; i < logos.length; i++) {
//   let image = logos[i];
//   let link = image.nextElementSibling.lastElementChild.lastElementChild.href;
//   image.onclick = function (event) {
//     window.open(link, "_blank");
//   };
// }

// var hideAllCarets = function () {
//   var caretElements = document.getElementsByClassName("caret_img");
//   for (let caret of caretElements) {
//     caret.style.display = "none";
//   }
// };

// var sortName = function () {
//   let caretDown = document.getElementById("name_caret_down");
//   let caretUp = document.getElementById("name_caret_up");
//   if (
//     caretDown.style.display === "flex" ||
//     (caretDown.style.display === "none" && caretUp.style.display === "none")
//   ) {
//     hideAllCarets();
//     caretUp.style.display = "flex";
//     var items = document.getElementsByClassName("list_item");
//     for (var i = 0; i < logos.length; i++) {
//       let item = items[i];
//       let name =
//         item.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent.toLowerCase();
//       item.style.order = name.charCodeAt(0) - 97;
//     }
//   } else {
//     hideAllCarets();
//     caretDown.style.display = "flex";
//     var items = document.getElementsByClassName("list_item");
//     for (var i = 0; i < logos.length; i++) {
//       let item = items[i];
//       let name =
//         item.firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent.toLowerCase();
//       item.style.order = 25 - (name.charCodeAt(0) - 97);
//     }
//   }
// };

// var sortLocation = function () {
//   let caretDown = document.getElementById("location_caret_down");
//   let caretUp = document.getElementById("location_caret_up");
//   if (
//     caretDown.style.display === "flex" ||
//     (caretDown.style.display === "none" && caretUp.style.display === "none")
//   ) {
//     hideAllCarets();
//     caretUp.style.display = "flex";
//     var items = document.getElementsByClassName("list_item");
//     for (var i = 0; i < logos.length; i++) {
//       let item = items[i];
//       let location =
//         item.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.textContent.toLowerCase();
//       item.style.order = location.charCodeAt(0) - 97;
//     }
//   } else {
//     hideAllCarets();
//     caretDown.style.display = "flex";
//     var items = document.getElementsByClassName("list_item");
//     for (var i = 0; i < logos.length; i++) {
//       let item = items[i];
//       let location =
//         item.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.textContent.toLowerCase();
//       item.style.order = 25 - (location.charCodeAt(0) - 97);
//     }
//   }
// };

// var sortNumber = function () {
//   let caretDown = document.getElementById("employees_caret_down");
//   let caretUp = document.getElementById("employees_caret_up");
//   if (
//     caretDown.style.display === "flex" ||
//     (caretDown.style.display === "none" && caretUp.style.display === "none")
//   ) {
//     hideAllCarets();
//     caretUp.style.display = "flex";
//     var items = document.getElementsByClassName("list_item");
//     for (var i = 0; i < logos.length; i++) {
//       let item = items[i];
//       let number = parseInt(
//         item.lastElementChild.previousElementSibling.firstElementChild
//           .lastElementChild.textContent
//       );
//       item.style.order = number;
//     }
//   } else {
//     hideAllCarets();
//     caretDown.style.display = "flex";
//     var items = document.getElementsByClassName("list_item");
//     for (var i = 0; i < logos.length; i++) {
//       let item = items[i];
//       let number = parseInt(
//         item.lastElementChild.previousElementSibling.firstElementChild
//           .lastElementChild.textContent
//       );
//       item.style.order = 5001 - number;
//     }
//   }
// };

// var sortMoney = function () {
//   let caretDown = document.getElementById("raise_caret_down");
//   let caretUp = document.getElementById("raise_caret_up");
//   if (
//     caretDown.style.display === "flex" ||
//     (caretDown.style.display === "none" && caretUp.style.display === "none")
//   ) {
//     hideAllCarets();
//     caretUp.style.display = "flex";
//     var items = document.getElementsByClassName("list_item");
//     for (var i = 0; i < logos.length; i++) {
//       let item = items[i];
//       let money = parseInt(
//         item.lastElementChild.firstElementChild.lastElementChild.textContent.replace(
//           /\s/g,
//           ""
//         )
//       );
//       item.style.order = money;
//     }
//   } else {
//     hideAllCarets();
//     caretDown.style.display = "flex";
//     var items = document.getElementsByClassName("list_item");
//     for (var i = 0; i < logos.length; i++) {
//       let item = items[i];
//       let money = parseInt(
//         item.lastElementChild.firstElementChild.lastElementChild.textContent.replace(
//           /\s/g,
//           ""
//         )
//       );
//       item.style.order = -money;
//     }
//   }
// };
