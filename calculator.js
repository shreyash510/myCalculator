console.log('its working');
const lightMode = './calculatorLight.css';
const darkMode = './calculator.css';
const result = document.getElementById('result');
const calValue = document.getElementById('calValue');

//menual button Click
function liveClick(value) {
    if (!result.value) {
        result.value = "";
    }
    result.value += value;
}

function calculate(value) {
    const calculateValue = eval(value || null);
    if (isNaN(calculateValue)) {
        result.value = `Can't divide 0 with 0`;
        setTimeout(() => {
            result.value = "";
        }, 2000);
    } else {
        result.value = calculateValue;
    }
}

// keyboard keys press 
document.addEventListener('keydown', pressKey);

function pressKey(e) {
    e.preventDefault();

    //numbers
    if (e.key === "0") {
        result.value += "0";
    } else if (e.key === "1") {
        result.value += "1";
    } else if (e.key === "2") {
        result.value += "2";
    } else if (e.key === "3") {
        result.value += "3";
    } else if (e.key === "4") {
        result.value += "4";
    } else if (e.key === "5") {
        result.value += "5";
    } else if (e.key === "6") {
        result.value += "6";
    } else if (e.key === "7") {
        result.value += "7";
    } else if (e.key === "7") {
        result.value += "7";
    } else if (e.key === "8") {
        result.value += "8";
    } else if (e.key === "9") {
        result.value += "9";
    }

    //operators
    if (e.key === "+") {
        result.value += "+";
    } else if (e.key === "-") {
        result.value += "-";
    } else if (e.key === "*") {
        result.value += "*";
    } else if (e.key === "/") {
        result.value += "/";
    }

    //decimal key
    if (e.key === ".") {
        result.value += ".";
    }

    //press enter to see result
    if (e.key === "Enter") {
        calculate(result.value);
    }

    // backslash

    if(e.key == "Backspace"){
        const resultInput = result.value;
        result.value = resultInput.substring(0, result.value.length - 1);
    }

    // dark mode light mode

}

function modes(){
    // alert('click')
    const lightThemeCal = 'calculatorLight.css';
    const darkThemeCal = 'calculator.css';
    const sunIcon = "./assets/SunIcon.svg";
    const moonIcon = './assets/MoonIcon.svg';

    const themeChange = document.getElementById('themeChange');
    const btnImg = document.getElementById('modeBtn');

    if (themeChange.getAttribute("href") === lightThemeCal) {
        themeChange.setAttribute("href", darkThemeCal);
        btnImg.setAttribute("src", sunIcon);
        // toast.innerHTML = "Dark Mode 🌙";
      } else {
        themeChange.setAttribute("href", lightThemeCal);
        btnImg.setAttribute("src", moonIcon);
        // toast.innerHTML = "Light Mode ☀️";
      }
}

// const changeMode = document.getElementById('modeBtn');
