const canvas=document.getElementById("myCanvas");
// The height will be the page height
canvas.height=window.innerHeight;
// The widht will be of 200 for the road, the neural network will be added to the side later
canvas.width=200;

// This to give context to the canvas for drawing and manipulating objects in the 2D world
const ctx=canvas.getContext("2d")
const car=new Car(100,100,30,50) // the parameters inlcude x,y position of the car and then the dimensions of the car.
car.draw(ctx) // draws the car on the canvas
