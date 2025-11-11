const p = document.getElementById("info");
const bt = document.getElementById("bt");

function func_main() {
    console.log("Hello, World!");
    p.innerHTML = `
        <b>Name</b> : Rattanatrai Losares <br>
        <b>Student ID</b> : 68034768 <br>
        <b>Major</b> : Software Development <br>
        <b>Year</b> : 1 <br>
        <b>Age</b> : 19 <br>
        <b>Birthday</b> : 27 March 2549 <br>
        <b>Email</b> : mimoza27zx@gmail.com <br>
        <b>Phone Number</b> : 098-359-8801 <br>
    `;
    bt.innerHTML = "Translate"
}