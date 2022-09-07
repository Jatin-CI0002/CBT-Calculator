let screen = document.getElementById("screen");
let values = document.querySelectorAll("button");
let result = "";
for (input of values) {
  input.addEventListener("click", (e) => {
    buttonValue = e.target.innerText;

    if (buttonValue == "←") {
      let value = document.getElementById("screen").value;
      let updated_result = value.slice(0, -1);
      result = "";
      result = updated_result;
      screen.value = result;
    } 
    else if (buttonValue == "AC") {
      screen.value = "0";
      result = "";
    }
    else if (screen.value == "0" && isOperator(buttonValue))
      alert("Please type number first");
    
    else if (buttonValue == 0 && result == "") {
      screen.value = "0";
      result = "";
    }

    else if (buttonValue == "=") {
      if (isOperator(result.charAt(result.length - 1)))
        alert("Enter valid input");
      let answer = eval(result);
      screen.value = answer;
      result = answer;
    }
    else {
        if (screen.value == "" && isOperator(buttonValue))
          alert("Enter Valid Input");

        else if (isOperator(result.slice(-1)) && isOperator(buttonValue))
          alert("Multiple continous operator not allowed");

        else if (result.includes(".") && buttonValue == ".")
        {
          alert("Multiple fractions not allowed");
        }
        else {
          result += buttonValue;
          screen.value = result;
        }
        if (!isValidLength(result))
          alert("Please enter number character of length 8");
        
        else screen.value = result;
    }
  });
}

function isOperator(char) {
  if (
    char == "%" ||
    char == "/" ||
    char == "*" ||
    char == "-" ||
    char == "+" ||
    char == "."
  )
    return true;
  else return false;
}

function isValidLength(string) {
  if (string.length > 8) return false;
  return true;
}
