
canvas=document.getElementById("mycanvas");

ctx=canvas.getContext("2d");

var colour,line_width,last_x_pos, last_y_pos,current_x_pos,current_y_pos,canvas_width,canvas_height,window_width,window_height,touchevent;
colour="black";
line_width=3;
window_width=screen.width;
window_height=screen.height;
console.log(window_width,window_height);
colour=document.getElementById("mycolour").value;
line_width=document.getElementById("mylinewidth").value;
canvas_height=window_height-80;
canvas_width=window_width-70;

if(window_width<992){
    document.getElementById("mycanvas").height=canvas_height;
    document.getElementById("mycanvas").width=canvas_width;
    document.body.style.overflow="hidden";
    
}
canvas.addEventListener("touchstart",touch_down);


function touch_down(e){
    colour=document.getElementById("mycolour").value;
    line_width=document.getElementById("mylinewidth").value;
    touchevent="Touchdown";
    last_x_pos=e.touches[0].clientX-canvas.offsetLeft;
    last_y_pos=e.touches[0].clientY-canvas.offsetTop;
    console.log(`the last pos of x ${last_x_pos} and the last pos of y is ${last_y_pos}`);


}
canvas.addEventListener("touchmove",touch_move);
function touch_move(e){
    current_x_pos= e.touches[0].clientX-canvas.offsetLeft;
    current_y_pos= e.touches[0].clientY-canvas.offsetTop;
    

    if(touchevent=="Touchdown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=line_width; 
        ctx.moveTo(last_x_pos,last_y_pos);//move the turtle
        

        ctx.lineTo(current_x_pos,current_y_pos);//draw it the current position
        console.log(`the current pos of x ${current_x_pos} and the current pos of y is ${current_y_pos}`);

        ctx.stroke();
    }
    last_x_pos=current_x_pos;
    last_y_pos=current_y_pos;

}
function clearArea(){
    ctx .clrRect(0,0,canvas_width,canvas_height);
}