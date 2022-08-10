function update (event){
    document.querySelector(".number").innerHTML = event;
}
let count = 1;
function add() {
    if(count < 10)
    update(count++)
}
function less() {
    if(count > 1)
    update(--count)
}