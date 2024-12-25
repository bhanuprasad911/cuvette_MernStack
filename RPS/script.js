var btn = document.getElementById("r_btn");
var rulediv = document.getElementById("g_rules");
var rock = document.getElementById("rbtn");
var scissor = document.getElementById("sbtn");
var paper = document.getElementById("pbtn");
var reset = document.getElementById("reset_btn");
var selection_div=document.getElementById("select");
var play_div = document.getElementById("play_div");
var user_selection_div = document.getElementById("user_report");
var sys_selection_div = document.getElementById("system_report");;
var decide = document.getElementById("win_report");
var win_text=document.getElementById("user_win");
var repeatBtn = document.getElementById("repeat");
var userWinTag = document.getElementById("user_wintag");
var systemWinTag = document.getElementById("system_wintag");
var hideBtn = document.getElementById("hide_btn");
var systemtag = document.getElementById("system1")

window.onload=()=>{
  domSysScore();
  domUserScore();
}

//set the score to 0 in local storage
function clearLocal(){
  var s_score = getSysScore();
  var u_score = getUserScore();
  if (s_score >= 50 || u_score >= 50){
    localStorage.clear();
  }
}
clearLocal();

//access scores from the local storage
function getUserScore() {
  return parseInt(localStorage.getItem("user_score")) || 0;
}

function getSysScore() {
  return parseInt(localStorage.getItem("system_score")) || 0;
}

//update marks to the local storage
function setUserScore(marks) {
  marks = Math.max(0, marks);
  localStorage.setItem("user_score", marks);
  domUserScore();
}

function setSysScore(marks) {
  marks = Math.max(0, marks);
  localStorage.setItem("system_score", marks);
  domSysScore();
}

//returns scores in the dom
function domUserScore() {
  document.getElementById("user_score").textContent = getUserScore();
}

function domSysScore() {
  document.getElementById("system_score").textContent = getSysScore();
}

//generate random numbers in the given range.
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play() {
  var a = randInt(1, 3); 
  return a;
}

// Main game logic  when clicked rock
rock.addEventListener("click", () => {
  var sysInp = play();
  var user_score = getUserScore();
  var sys_score = getSysScore();
  play_div.style.display = "none";
  selection_div.style.display = "flex";
  const user_selection = rock.cloneNode(true);
  hideBtn.style.visibility = "hidden";
  rulediv.style.visibility="hidden";
  selection_div.style.justifyContent="center";

  
  
  if (sysInp === 1) {
    var userselection_inner_div = document.createElement("div");
    var syselection_inner_div = document.createElement("div");
    win_text.textContent="TIE";
    systemtag.style.display = 'none';
    reset.style.display="none";
    btn.style.left="90%";
    sys_selection = rock.cloneNode(true);
    sys_selection.classList.remove("btn");
    user_selection.classList.remove("btn");
    sys_selection.classList.add("loose_button");
    user_selection.classList.add("loose_button");
    syselection_inner_div.classList.add("loose");
    userselection_inner_div.classList.add("loose")
    console.log("Clicked rock, no change");
    
  } else if (sysInp === 2) {
    var userselection_inner_div = document.createElement("div");
    var syselection_inner_div = document.createElement("div");
    sys_selection = scissor.cloneNode(true);
    win_text.textContent="YOU WIN";
    reset.style.display="inline";
    btn.style.left="80%";
    syselection_inner_div.classList.add("loose");
    userselection_inner_div.classList.add("selection-dec");
    user_selection.classList.add("selection_btn");
    user_selection.classList.remove("btn");
    sys_selection.classList.add("loose_button");
    sys_selection.classList.remove("btn");
    user_score += 1;
    console.log("Clicked scissor, score for user");

  } else {
    var userselection_inner_div = document.createElement("div");
    var syselection_inner_div = document.createElement("div");
    sys_selection = paper.cloneNode(true);
    win_text.textContent="YOU LOST";
    reset.style.display="none";
    btn.style.left="90%";
    userselection_inner_div.classList.add("loose")
    user_selection.classList.add("loose_button");
    user_selection.classList.remove("btn");
    sys_selection.classList.add("selection_btn");
    syselection_inner_div.classList.add("selection-dec");
    sys_selection.classList.remove("btn");
    sys_score += 1;
    console.log("Clicked paper, score for system");
  }
  
  userselection_inner_div.appendChild(user_selection);
  user_selection_div.appendChild(userWinTag)
  user_selection_div.appendChild(userselection_inner_div);
  syselection_inner_div.appendChild(sys_selection);
  sys_selection_div.appendChild(systemWinTag)
  sys_selection_div.appendChild(syselection_inner_div);
  setSysScore(sys_score);
  setUserScore(user_score);
  clearLocal();
});

//when clicked scissor
scissor.addEventListener("click", () => {
  var sysInp = play();
  var user_score = getUserScore();
  var sys_score = getSysScore();
  play_div.style.display = "none";
  selection_div.style.display = "flex";
  const user_selection = scissor.cloneNode(true);
  hideBtn.style.visibility = "hidden";
  rulediv.style.visibility="hidden";
  selection_div.style.justifyContent="center";


  if (sysInp === 1) {
    var userselection_inner_div = document.createElement("div");
    var syselection_inner_div = document.createElement("div");
    win_text.textContent="TIE"
    systemtag.style.display = 'none';
    reset.style.display="none";
    btn.style.left="90%";

    sys_selection = scissor.cloneNode(true);
    user_selection.classList.remove("btn");
    sys_selection.classList.remove("btn");
    user_selection.classList.add("loose_button");
    sys_selection.classList.add("loose_button");
    syselection_inner_div.classList.add("loose");
    userselection_inner_div.classList.add("loose")
    console.log("Clicked scissor, no change");

  } else if (sysInp === 2) {
    var userselection_inner_div = document.createElement("div");
    var syselection_inner_div = document.createElement("div");
    sys_selection = rock.cloneNode(true);
    win_text.textContent="YOU LOST";
    reset.style.display="none";
    btn.style.left="90%";

    userselection_inner_div.classList.add("loose")
    syselection_inner_div.classList.add("selection-dec");
    user_selection.classList.add("loose_button")
    user_selection.classList.remove("btn")
    sys_selection.classList.add("selection_btn");
    sys_selection.classList.remove("btn");
    sys_score += 1;
    console.log("Clicked rock, score for system");
    
  } else {
    var userselection_inner_div = document.createElement("div");
    var syselection_inner_div = document.createElement("div");
    sys_selection = paper.cloneNode(true);
    win_text.textContent="YOU WIN";
    reset.style.display="inline";
    btn.style.left="80%";
    syselection_inner_div.classList.add("loose");
    userselection_inner_div.classList.add("selection-dec");
    user_selection.classList.add("selection_btn");
    user_selection.classList.remove("btn");
    sys_selection.classList.add("loose_button");
    sys_selection.classList.remove("btn");
    user_score += 1;
    console.log("Clicked paper, score for user");
  }

  userselection_inner_div.appendChild(user_selection);
  user_selection_div.appendChild(userWinTag)
  user_selection_div.appendChild(userselection_inner_div);
  syselection_inner_div.appendChild(sys_selection);
  sys_selection_div.appendChild(systemWinTag)
  sys_selection_div.appendChild(syselection_inner_div);
  setSysScore(sys_score);
  setUserScore(user_score);
  clearLocal();
});

//when clicked paper
paper.addEventListener("click", () => {
  var sysInp = play();
  var user_score = getUserScore();
  var sys_score = getSysScore();
  play_div.style.display = "none";
  selection_div.style.display = "flex";
  const user_selection = paper.cloneNode(true);
  hideBtn.style.visibility = "hidden";
  rulediv.style.visibility="hidden";
  selection_div.style.justifyContent="center";


  if (sysInp === 1) {
    var userselection_inner_div = document.createElement("div");
    var syselection_inner_div = document.createElement("div");
    sys_selection = rock.cloneNode(true);
    win_text.textContent="YOU WIN";
    reset.style.display="inline";
    btn.style.left="80%";
    userselection_inner_div.classList.add("selection-dec");
    syselection_inner_div.classList.add("loose");
    user_selection.classList.add("selection_btn");
    sys_selection.classList.add("loose_button");
    user_selection.classList.remove("btn");
    sys_selection.classList.remove("btn");
    user_score += 1;
    console.log("Clicked rock, score for user");

  } else if (sysInp === 2) {
    var userselection_inner_div = document.createElement("div");
    var syselection_inner_div = document.createElement("div");
    sys_selection = scissor.cloneNode(true);
    win_text.textContent="YOU LOST";
    reset.style.display="none";
    btn.style.left="90%";
    syselection_inner_div.classList.add("selection-dec");
    userselection_inner_div.classList.add("loose");
    user_selection.classList.add("loose_button");
    sys_selection.classList.add("selection_btn");
    user_selection.classList.remove("btn");
    sys_selection.classList.remove("btn");
    sys_score += 1;
    console.log("Clicked scissor, score for system");

  } else {
    var userselection_inner_div = document.createElement("div");
    var syselection_inner_div = document.createElement("div");
    sys_selection = paper.cloneNode(true);
    win_text.textContent="TIE";
    systemtag.style.display = 'none';
    reset.style.display="none";
    btn.style.left="90%";
    user_selection.classList.remove("btn");
    sys_selection.classList.remove("btn");
    user_selection.classList.add("loose_button");
    sys_selection.classList.add("loose_button");
    syselection_inner_div.classList.add("loose");
    userselection_inner_div.classList.add("loose")
    console.log("Clicked paper, no change");
  }

  userselection_inner_div.appendChild(user_selection);
  user_selection_div.appendChild(userWinTag)
  user_selection_div.appendChild(userselection_inner_div);
  syselection_inner_div.appendChild(sys_selection);
  sys_selection_div.appendChild(systemWinTag)
  sys_selection_div.appendChild(syselection_inner_div);
  setSysScore(sys_score);
  setUserScore(user_score);
  clearLocal();
});

//Redirection to win.html
reset.addEventListener("click", ()=>{
  window.location.href = "win.html";
})

//play again logic
repeatBtn.addEventListener("click",()=>{
  if(reset.style.display==="inline"){
    reset.style.display="none";
    btn.style.left="90%";
  }
  hideBtn.style.visibility = "hidden";
  rulediv.style.visibility="hidden";
  selection_div.style.display="none";
  play_div.style.display="flex";
  user_selection_div.innerHTML="";
  sys_selection_div.innerHTML="";
  
})

// display rule div
btn.addEventListener("click", () => {
  if (selection_div.style.display==='flex' ) {
    selection_div.style.justifyContent="flex-start";
    rulediv.style.visibility = "visible";
    hideBtn.style.visibility="visible"
  } else {
    rulediv.style.visibility = "visible";
    hideBtn.style.visibility="visible"
  }
});

//Hide rule div
hideBtn.addEventListener("click",()=>{
  const sel_style = window.getComputedStyle(selection_div)
  if (sel_style.display === "flex") {
    selection_div.style.justifyContent="center";
    rulediv.style.visibility = "hidden";
    hideBtn.style.visibility= "hidden";
  }
  else{
    rulediv.style.visibility = "hidden";
    hideBtn.style.visibility= "hidden";
  }
})

