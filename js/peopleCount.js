// Increment Lap

/* let lapsCompleted = 0;

function increment() {
    lapsCompleted += 1;

    console.log(lapsCompleted);

}

increment();
increment();
increment(); */




/* Increment Counter Button */

let count = 0;

function incrementCounter() {
    count += 1;
    console.log(count);
    document.getElementById("initialCounter").innerHTML = count;
}



/* Save Counter Button */
let countEl = document.getElementById("saveCounter");

function save() {
    document.getElementById("initialCounter").innerHTML = count;
    console.log(count);
    document.getElementById("initialCounter").innerHTML = 0;
    
    let savedCount = count + " - ";
    countEl.textContent += savedCount;

    count = 0;
}


