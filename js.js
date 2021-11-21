var isRobot = false;
console.log(isRobot);

document.getElementById("checkRobot").onclick = function() {
  isRobot = true;
  document.getElementById("helloMail").style.display="none";
console.log(isRobot);
  }
 
isRobot = false ;
/*
document.getElementById("body").onload = function() {changeColor()};
function changeColor() {
    document.getElementById("body").style.color = "#76b5c5";
  }

  var click = 0;
  document.getElementById("body").onclick = function() {
    click++;
      console.log(click);
 
      changeColor();
    };
 
  function changeColor() {
      var property = document.getElementById("body");
      if (click == 2) {
          property.style.color = "#76b5c5"             
      }
      if (click == 3) {
        property.style.color = "#eeeee4"             
    }
    if (click == 4) {
        property.style.color = "#873e23"
    }
      else {
          property.style.color = "#154c79"
      }
  }
  */