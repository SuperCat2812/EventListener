let imgcat = document.getElementById("cat gamer");
imgcat.addEventListener('click', function display() {
    let b = imgcat.src;
    console.log(b);
    imgcat.removeEventListener('click', display);
});


let in1 = document.getElementById("in1");
let in2 = document.getElementById("in2");
let p = document.getElementById("test");
in1.addEventListener('blur', function () {
    p.textContent += in1.value;
    console.log(p);
});
in2.addEventListener('blur', function () {
    p.textContent += in2.value;
    console.log(p);
});
in1.addEventListener('click', function res() {
    alert(in1.value + in2.value);
    in1.removeEventListener('click', res)
});
p.addEventListener('click', function () {
    let r = document.getElementById("res2");
    r = p.textContent * p.textContent;
    console.log(r);
});

let d = document.getElementById("d1")
d.addEventListener('click', red);
function red() {
    d.style.backgroundColor = "red";
    d.removeEventListener('click', red);
    d.addEventListener('click', green);
};
function green() {
    d.style.backgroundColor = "green";
    d.removeEventListener('click', green);
    d.addEventListener('click', red);
};
