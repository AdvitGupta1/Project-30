class Stand{
    constructor(x,y,w,h){
        var options={
            restitution:0.4,
            friction: 1.0,
            density: 1.2,
            isStatic: true
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        
    }

    display(){
        push()
        rectMode(CENTER);
        fill("white");
        rect(this.x,this.y,this.w,this.h);
        pop()
    }
}