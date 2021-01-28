class Box{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            density:1.2,
            friction:1.0,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.visible=255
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed<3){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("blue")
        rect(0,0,this.w,this.h);
        pop()
        }else{
            World.remove(world,this.body);
            push()
            this.visible=this.visible-5;
            pop()
        }
       
    }
}