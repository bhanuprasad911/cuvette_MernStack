const output = document.getElementById("output");
const buttons = document.querySelectorAll("button");

let input = "";
let calculated = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "AC") {
      input = "";
      output.value = "";
    } else if (value === "Del") {
      input = input.slice(0, -1);
      output.value = input;
    } else if (value === "=") {
        input = eval(input).toString();
        output.value = input;
        calculated = true;
       
    } else {
      input += value;
      output.value = input;
    }
  });
});
