class Car{ // a class intialized by the contructor
    constructor(x,y,width,height){// remembers the values sent
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle=0.03;
        this.controls=new Controls();
    }

    update(){
        this.#move();
    }

    #move(){
        if(this.controls.forward){
            this.speed+=this.acceleration
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }
        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed=-this.maxSpeed/2;
        }
        // adding some realism using friction
        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){ // this lets to the object always moving when the speed is 0
            this.speed+=this.friction;
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }
        // this for the direction in when in reverse
        if(this.speed!=0){
            const flip=this.speed>0?1:-1;
            // lets implement left and right using angles
            if(this.controls.left){
                // this is because our unit circle is rotated and alpha increases towards the left.
                this.angle+=0.03*flip;
            }
            if(this.controls.right){
                // angle reduces towards the right.
                this.angle-=0.03*flip;
            }
        }
        //compoenent wise change the speed
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed; 
    }
    
    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.width/2, // this is the coordinate for the rectangle, which is at the center.
            -this.height/2, // similarly with the y coordinate for the centre.
            this.width,
            this.height
        );
        ctx.fill(); // fills the canvas with the values
        ctx.restore();
    
    }



}