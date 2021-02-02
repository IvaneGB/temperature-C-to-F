let farenheit = document.getElementById('farenheit');


function farenheitToCelcious() {
    debugger

    let f = farenheit.value;

    let c = document.getElementById('celsious');

    if (f !== "") {

        c.value = ((f - 32) * 5 / 9).toFixed(1);
    } else {
        c.value = "";


    }

}

farenheit.addEventListener('keyup', farenheitToCelcious, true);


let celsious = document.getElementById('celsious');


function celsiousToFarenheit() {
    let c = celsious.value;

    let f = document.getElementById('farenheit');

    f.value = parseInt(c) / 5 * 9 + 32;
}

celsious.addEventListener('keyup', celsiousToFarenheit, true);