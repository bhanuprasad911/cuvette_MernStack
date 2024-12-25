var play_again = document.getElementById("again");
var rulediv = document.getElementById("g_rules1");
var ruleBtn = document.getElementById("r_btn1");
var hideRule = document.getElementById("hide_btn");

play_again.addEventListener("click", () => {
  window.location.href = "index.html";
});

ruleBtn.addEventListener("click", () => {
  const ruledivComputedStyle = window.getComputedStyle(rulediv);
  if (ruledivComputedStyle.visibility === "hidden") {
    //   selection_div.style.justifyContent="flex-start";
    rulediv.style.visibility = "visible";
    hideRule.style.visibility = "visible"
  } 
});

hideRule.addEventListener("click", () => {

  if (rulediv.style.visibility==="visible") {
    rulediv.style.visibility = "hidden";
    hideRule.style.visibility = "hidden";
  }
 
});
