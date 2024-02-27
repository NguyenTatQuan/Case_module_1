let canvas = document.getElementById("gamazone");
let context = document.getElementById("2d");
let  scoreshow = document.getElementById("score");

let birding = new  Image();
let hinhnenchinh = new  Image();
let ongtren = new  Image();
let ongduoi = new  Image();
birding.src="images/bird.png"
hinhnenchinh.src="images/hinhnenchinh.png"
ongtren.src="images/ongtren.png"
ongduoi.src="images/ongduoi.png"

let score=0;
let khoangcachhaiong=150
let khoangcachdenongduoi;

let bird={
    x:canvas.width,
    y:0
}

function run(){
    context.drawImage(hinhnenchinh,0,0);
    context.drawImage(birding,bird,x,bird,y)

    for (let i=0;i<ong.length;i++){
        khoangcachdenongduoi=ongtren.height+khoangcachhaiong

    }
    bird.y+=3;
    requestAnimationFrame(run);
}
document.addEventListener("keydown",function (){
    bird.y-=60
})
run()
