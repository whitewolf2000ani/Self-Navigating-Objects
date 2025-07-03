class Car{ // a class intialized by the contructor
    constructor(x,y,width,height){// remembers the values sent
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2, // this is the coordinate for the rectangle, which is at the center.
            this.y-this.height/2, // similarly with the y coordinate for the centre.
            this.width,
            this.height
        );
        ctx.fill(); // fills the canvas with the values
    }


}