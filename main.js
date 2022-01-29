var mouseevent="empty"
var lastpositionofx,lastpositionofy
canvas=document.getElementById("canvas")
ctx=canvas.getContext("2d")
color="purple"
width=5
canvas.addEventListener("mousedown",mousedown)
function mousedown(e) {
mouseevent="mousedown"
color=document.getElementById("color").value;
width=document.getElementById("width").value;
}
canvas.addEventListener("mouseup",mouseup)
function mouseup(e){
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mouseleave)
function mouseleave(e){
mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",mousemove)
function mousemove(e){
curentpostionofx=e.clientX-canvas.offsetLeft
curentpostionofy=e.clientY-canvas.offsetTop
if (mouseevent=="mousedown") {
 ctx.beginPath()
 ctx.strokeStyle=color
 ctx.lineWidth=width
 ctx.moveTo(lastpositionofx,lastpositionofy)
 ctx.lineTo(curentpostionofx,curentpostionofy)
 ctx.stroke() 
}
lastpositionofx=curentpostionofx
lastpositionofy=curentpostionofy

}
function clear_area() {
ctx.clearRect(0,0,canvas.width,canvas.height)
}


