let redSquare = document.querySelector('.redsquare');
let time = document.querySelector('#time');
let total = document.querySelector('#total');
let best = document.querySelector('.best');

best.innerHTML = window.localStorage.getItem("best");

setInterval(() => {
    if (parseInt(time.innerHTML) > 0) {
        if (parseInt(time.innerHTML) <= 10) {
            time.style.color = 'red';
        }
        time.innerHTML = parseInt(time.innerHTML) - 1;
    }

    if (parseInt(time.innerHTML) == 0) {
        if ( Number(window.localStorage.getItem("best")) < Number(total.innerHTML) ) {
            window.localStorage.setItem("best", Number(total.innerHTML));
            best.innerHTML = window.localStorage.getItem("best");
        }
    }
}, 1000);

redSquare.addEventListener('click', (event) => {
    if (parseInt(time.innerHTML) > 0) {
        total.innerHTML = Number(total.innerHTML) + 1;

        event.target.style.display = "none";
        event.target.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px';
        event.target.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px';
        event.target.style.display = "block";
    }
});