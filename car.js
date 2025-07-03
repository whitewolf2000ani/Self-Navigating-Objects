class Car{ // a class intialized by the contructor
    constructor(x,y,width,height){// remembers the values sent
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.controls=new Controls();
    }

    update(){
        if(this.controls.forward){
            this.y-=2;
        }
        if(this.controls.reverse){
            this.y+=2;
        }
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