canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 100;

background_image = "mars.jpg"; 
rover_image = "rover.png"; 
rover_x = 10;
 rover_y = 10;


function add() {
    background_imgTag = new Image();
    background_imgTag = uploadBackground;
    background_imgTag = background_image;
 
    rover_imgTag = new Image();
    rover_imgTag = uploadrover;
    rover_imgTag = rover_image;
}
uploadrover();
uploadBackground();

nasa_mars_images_array = ["nasa_image_1.jpg"], ["nasa_image_2.jpg"], ["nasa_image_3.jpg"], ["nasa_image_4.jpg"],

random_number= Math.floor(Math.random() * 4)

function uploadBackground(){
    ctx.drawImage( canvas_imgTag, canvas_x, canvas_y, canvas_width, canvas.height);
}



function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
 { 
    keyPressed = e.keyCode; 
console.log(keyPressed); 
if(keyPressed == '38') 
{
    up(); 
    console.log("up");
}
  
if(keyPressed == '40')
{
     down();
      console.log("down"); 
} 
    
if(keyPressed == '37')
{ 
    left();
    console.log("left");
 }

if(keyPressed == '39')
 {
    right(); 
    console.log("right"); 

}

}

function up()
{
    if(rover_y >=0)
    {

        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x =" + rover_x +" | y = " +rover_y);
    uploadBackground();
    uploadrover();
    }

}

function down()
{
    if(rover_y <=500)
    {

        rover_y = rover_y+ 10;
        console.log("When down arrow is pressed, x =" + rover_x +" | y = " +rover_y);
    uploadBackground();
    uploadrover();
    }
}

function left()
{
    if(rover_x >=0)
    {

        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x =" + rover_x +" | y = " +rover_y);
    uploadBackground();
    uploadrover();
    }
}

function down()
{
    if(rover_x <= 700)
    {

        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x =" + rover_x +" | y = " +rover_y);
    uploadBackground();
    uploadrover();
    }
}