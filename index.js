/* const resxInput = Number(document.getElementById("resx").textContent);
const resyInput = Number(document.getElementById("resy").textContent);
const objectCount = Number(document.getElementById("objectCount").textContent);
const iterations = Number(document.getElementById("download").textContent); */

const checkbox = document.getElementById("mode");
const startingPointsContainer  = document.getElementById("startingPoints-container");
const generateButton = document.getElementById("generate");
const download = document.getElementById("download");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Point {
    constructor(x, y, dirx, diry) {
        this.x = x;
        this.y = y;
        this.dirx = dirx;
        this.diry = diry;
    }
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}




let objectCount = 2;
let iterations = 15;
let LineLength = 50;
let randomStarts = true;


let objects = [
    /* new Point(250,250,-1,0),
    new Point(250,250,1,0),
    new Point(250,250,0,-1),
    new Point(250,250,0,1), *//* 
    new Point(CanvasWidth/2,CanvasHeight/2,0,-1),
    new Point(CanvasWidth/2,CanvasHeight/2,0,1),
    new Point(CanvasWidth/2,CanvasHeight/2/2,1,0),
    new Point(CanvasWidth/2,CanvasHeight/2,-1,0), */

];





function draw(iter){
    objects.forEach(obj => {
        /* let move = getRandomArbitrary(0, 50); */
        let move = LineLength/iter;
        
        
        ctx.beginPath();
        ctx.moveTo(obj.x,obj.y);
        obj.x += obj.dirx * move;
        obj.y += obj.diry * move;
        ctx.lineTo(obj.x, obj.y);
        ctx.stroke();

        let n = getRandomIntInclusive(0,3);
        n=1;
        for(let i=0; i<n; i++){
            let d = getRandomIntInclusive(0,3);
            if(obj.dirx==1 || obj.dirx==-1){
                if(d==0){
                     objects.push(new Point(obj.x,obj.y,0,1))
                    objects.push(new Point(obj.x,obj.y,0,-1))
                    //nothing
                } else if(d==1){
                    objects.push(new Point(obj.x,obj.y,0,1))
                    /* obj.dirx = 0;
                    obj.diry = 1; */
                } else if(d==2){
                    objects.push(new Point(obj.x,obj.y,0,-1))
                    /* obj.dirx = 0;
                    obj.diry = -1; */
                }
            } else{
                if(d==0){
                     objects.push(new Point(obj.x,obj.y,-1,0))
                    objects.push(new Point(obj.x,obj.y,1,0)) 
                    //nothing
                } else if(d==1){
                    objects.push(new Point(obj.x,obj.y,1,0))
                    /* obj.dirx = 1;
                    obj.diry = 0; */
                } else if(d==2){
                    objects.push(new Point(obj.x,obj.y,-1,0))
                    /* obj.dirx = -1;
                    obj.diry = 0; */
                }
            }
        }
    });
}
/* let i=0;
let inter = setInterval(()=>{
    draw(i+1);
    i++;
    if(i==iterations) clearInterval(inter);

}, 1000); */
/* 
ctx.scale(CanvasWidth/MyWidth,CanvasHeight/MyHeight);
*/

/* for(let i=0; i<iterations; i++){
    draw(i+1);
}  */

checkbox.addEventListener("click", () => {
    if(checkbox.checked) startingPointsContainer.style.display="block";
    else startingPointsContainer.style.display="none";
});

generateButton.addEventListener("click", () => {
    canvas.width = document.getElementById("resx").value;
    canvas.height = document.getElementById("resy").value;
    objectCount = document.getElementById("objectCount").value;
    iterations = document.getElementById("iterations").value;

    let CanvasWidth = canvas.clientWidth;
    let CanvasHeight = canvas.clientHeight;
    ctx.clearRect(0,0,CanvasWidth,CanvasWidth);
    if(checkbox.checked){
        objects = [];
        for(let i=0; i<objectCount; i++){
            let x = getRandomArbitrary(0,CanvasWidth);
            let y = getRandomArbitrary(0,CanvasHeight);

            let d = getRandomIntInclusive(0,3);
            let dx = 0;
            let dy = 0;
            if(d == 0) dx = 1;
            if(d == 1) dx = -1;
            if(d == 2) dy = 1;
            if(d == 3) dy = -1;

            objects.push(new Point(x,y,dx,dy));
        }
    } else{
        objects = [
            new Point(CanvasWidth/2,CanvasHeight/2,0,-1),
            new Point(CanvasWidth/2,CanvasHeight/2,0,1),
            new Point(CanvasWidth/2,CanvasHeight/2/2,1,0),
            new Point(CanvasWidth/2,CanvasHeight/2,-1,0),
        ]
    }

    //canvas.style.display = "block";
    for(let i=0; i<iterations; i++){
        draw(i+1);
    }

});

download.addEventListener("click", () => {
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `test`;
        link.href = url;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 100); // kurz warten
    }, 'image/png');
});