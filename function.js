var rezultatas = undefined;
var number = undefined;
var number1 = undefined;
var veiksmas = undefined;
var istorija = [];

function handleClick(item) {
    if (rezultatas != undefined) {
        rezultatas = undefined;
        number = undefined;
        number1 = undefined;
        document.getElementById('rezultatas').innerHTML = "";
    }

    switch (item) {
        case "1":
            document.getElementById('rezultatas').innerHTML += "1";
            break;
        case "2":
            document.getElementById('rezultatas').innerHTML += "2";
            break;
        case "3":
            document.getElementById('rezultatas').innerHTML += "3";
            break;
        case "4":
            document.getElementById('rezultatas').innerHTML += "4";
            break;
        case "5":
            document.getElementById('rezultatas').innerHTML += "5";
            break;
        case "6":
            document.getElementById('rezultatas').innerHTML += "6";
            break;
        case "7":
            document.getElementById('rezultatas').innerHTML += "7";
            break;
        case "8":
            document.getElementById('rezultatas').innerHTML += "8";
            break;
        case "9":
            document.getElementById('rezultatas').innerHTML += "9";
            break;
    }
}

function veiksmai(items) {
    veiksmas = items;
    if (number == undefined) {
        number = Number(document.getElementById('rezultatas').innerHTML);
        document.getElementById('atsakymas').innerHTML = ""
    }
}

function veiksmlygu() {
    if (number != undefined && veiksmai != undefined) {
        number1 = Number(document.getElementById('rezultatas').innerHTML);
        if (isNaN(number1)) {
            number1 = 0;
        }
        switch (veiksmas) {
            case "dalyba":
                number / number1;
                break;
            case "daugyba":
                number * number1;
                break;
            case "atimtis":
                number - number1;
                break;
            case "sudetis":
                number + number1;
                break;
        }
        document.getElementById('rezultatas').innerHTML = rezultatas;
        istorija.push({"number": number, "number1": number1, "veiksmai": veiksmas, "rezultatas": rezultatas})
        console.log(istorija);
    }


}