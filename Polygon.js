class Polygon{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.7,
            density:1.2,
            friction:0.4
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("polygon.png");
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }

    display(){
        var pos=(this.body.position)
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop()
    }
}