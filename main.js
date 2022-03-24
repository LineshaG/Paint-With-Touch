var mouseEvent = "";
var last_x, last_y;
color = "black";
width = 1;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) 
{
color = document.getElementById("color").value;
width = document.getElementById("width").value;
mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", MouseUp);
function MouseUp(e) {
   mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", MouseLeave);
function MouseLeave(e) {
   mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", MouseMove);
function MouseMove(e) {
   current_x = e.clientX - canvas.offsetLeft;
   current_y = e.clientY - canvas.offsetTop;
   if (mouseEvent == "mousedown")
   {
       ctx.beginPath();
       ctx.strokeStyle= color;
       ctx.lineWidth= width;
       ctx.moveTo(last_x, last_y);
       console.log(last_x, last_y);
       ctx.lineTo(current_x,current_y);
       console.log(current_x, current_y);
       ctx.stroke();
   }
   last_x = current_x;
   last_y = current_y;    
}
if (screen.width<992)
   {
       document.body.style.overflow="hidden"
   }

canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        last_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y= e.touches[0].clientY-canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }
    function ClearArea()
    {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    

