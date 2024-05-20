

const btn = document.getElementById("btn");
const userText = document.getElementById("userText");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const votter = document.getElementById("votter");
const votter1 = document.getElementById("votter1");
let age;
btn.onclick = function() {
    age = userText.value;
    age = Number(age);

    // if(votter.checked){
    //     result2.textContent = `app vote de sakte hai`;
    // }else if(votter1.checked){
    //     result2.textContent = `krupaya votter ID ke liye apply kijiye`;
    // }else{
    //     result2.textContent = `krupaya votter Id hai tho yes par or \nvotter Id nahi hai tho No par click kari ye`;
    // }

    if(age >= 18 && age <= 99){
        result.textContent = `app votting ke liye yogy hai`;

        if(votter.checked){
            result2.textContent = `app vote de sakte hai`;
        }else if(votter1.checked){
            result2.textContent = `krupaya votter ID ke liye apply kijiye`;
        }else{
            result2.textContent = `krupaya votter Id hai tho yes par or \nvotter Id nahi hai tho No par click kari ye`;
        }
    } else if(age <= -1){
        result.textContent = `app vote nahi kar sakte kyu ki app tho aabhi tak paida hi nahi huye`;

    } else if(age == 0){
        result.textContent = `app vote nahi kar skate kyu ki app aabhi aabhi paida huve ho!`;
    
    } else if(age >= 100 && age < 99999999999999){
        
        result.textContent = `app votting ke liye bhuth hi vayask hai`;

        if(votter.checked){
            result2.textContent = `app vote de sakte hai`;
        }else if(votter1.checked){
            result2.textContent = `krupaya votter ID ke liye apply kijiye`;
        }else{
            result2.textContent = `krupaya votter Id hai tho yes par or \nvotter Id nahi hai tho No par click kari ye`;
        }

    }else if(age >= 1 && age < 18){
        result.textContent = `app voting ke liye 18+ hona chiye`;

    } else if(age == undefined){
        result.textContent = `kripya Age Enter kare: try again`;

    } else{
        result.textContent = `kripya vaidhya Age Enter kare: try again`;

    }
}

