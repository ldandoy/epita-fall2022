console.log('Hello world !');

/*let name = "Loïc";
const test = false;
let priorities = ['error', 'warning', 'debbug'];

priorities.forEach((item, index) => {
    console.log(index + ":" + item)
})

if (test) {
    console.log(name);
}*/

let titleElement = document.querySelector('#title');
console.log(titleElement);

titleElement.addEventListener("click", (e) => {
    console.log('Click on title !');
});