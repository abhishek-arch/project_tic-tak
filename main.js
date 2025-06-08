let img = {
  img1: "close.png",
  img2: "zero.png",
};
console.log(img);
let value = true;
let array = Array.from(document.body.firstElementChild.children);
array.forEach((element) => {
  element.addEventListener("click", (e) => {
   
  
  
  
    if (value == true) {
      if (e.currentTarget.querySelector("img")) {
        e.currentTarget.querySelector("img").src = img.img1;
      } else {
        alert("please click inside box");
      }
      value = !value;
    } else {
      e.currentTarget.querySelector("img").src = img.img2;
      value = !value;
    }

});
});

document.querySelector("button").addEventListener("click", () => {
  Array.from(document.getElementsByTagName("img")).forEach((e) => {
    e.src = "#";
  });
  value = true;
});

function checkwin() {
  const winConditions = [
    { cells: ["box1", "box2", "box3"], type: "row", index: 0 },
    { cells: ["box4", "box5", "box6"], type: "row", index: 1 },
    { cells: ["box7", "box8", "box9"], type: "row", index: 2 },
    { cells: ["box1", "box4", "box7"], type: "column", index: 0 },
    { cells: ["box2", "box5", "box8"], type: "column", index: 1 },

    { cells: ["box3", "box6", "box9"], type: "column", index: 2 },
    { cells: ["box1", "box5", "box9"], type: "diagonal1"},

    { cells: ["box3", "box5", "box7"], type: "diagonal2" }
  ];

  for (const win of winConditions) {
    let [img1, img2, img3] = win.cells.map((e) => {
      return document.getElementsByClassName(`${e}`)[0].querySelector("img")
        .src;
    });
    if (
      img1.includes("close.png") &&
      img2.includes("close.png") &&
      img3.includes("close.png")
    ) {
        showWinninglines(win.type,win.index)

      setTimeout(() => {
        alert(" ❌ win");
        reset()
        winlinereset();
      }, 1000);

      
      return;
    }

    if (
      img1.includes("zero.png") &&
      img2.includes("zero.png") &&
      img3.includes("zero.png")
    ) {
        showWinninglines(win.type,win.index)

      setTimeout(() => {
        alert("⭕ win");
        reset()
        winlinereset();
      }, 1000);
      
      return;
    }
   
    

  // Check if every cell is filled (src is NOT "#" or empty)
  

  
  }
  const imgs = Array.from(document.querySelectorAll("img"));
  const allFilled = imgs.every(img => {
    let src = img.getAttribute("src");
    return src !== null && src.trim() !== "" && src !== "#";
  });
if (allFilled) {
    setTimeout(() => {
      alert("It's a draw! 🤝");
      reset();
      winlinereset();
    }, 500);
  }
  
}
function reset() {
  Array.from(document.getElementsByTagName("img")).forEach((e) => {
    e.src = "#";
  });
  value = true;
}

document.body.addEventListener("click", () => {
  checkwin();
});

let winline = document.getElementById("winlines").style;

function showWinninglines(type, index) {
  winline.top = "0%";
  winline.transform = "scaleX(0)";
  winline["transform-origin"] = "left";
  winline.width = "600px";
   winline.height = "5px";
  winline.background = "black";

  if (type === "row") {
    winline.top = `${index * 200 + 100}px`;
    winline.transform = "scaleX(1)";
    winline.left = "0px";
  } else if (type === "column") {
    winline.top = "0px";
    winline.left = `${index * 200 + 100}px`;
    winline.transform = "rotate(90deg) scaleX(1)";
  }

  else if (type === "diagonal1") {
    winline.top = "0px";
    winline.left = "0px";
    winline.transform = "rotate(45deg) scaleX(1.42)"; // √2 ≈ 1.42
  } else if (type === "diagonal2") {
    winline.top = "0px";
    winline.left = "0px";
    winline.transform = "rotate(-45deg) scaleX(1.42)";
    winline.transformOrigin = "top right";
  }
}


function winlinereset() {
    winline.top = "0%";
  winline.transform = "scaleX(0)";
  winline["transform-origin"] = "left";
  winline.width = "600px";
   winline.height = "5px";
  winline.background = "black";
}