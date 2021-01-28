const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var body,world,engine,stand1,stand2,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,polygon,shooter;

function setup(){
    createCanvas(800,700);
    engine=Engine.create();
    world=engine.world;
    
    stand1=new Stand(315,300,220,5);
    stand2=new Stand(530,400,160,5);
    block1=new Box(225,277.5,30,40);
    block2=new Box(255,277.5,30,40);
    block3=new Box(285,277.5,30,40);
    block4=new Box(315,277.5,30,40);
    block5=new Box(345,277.5,30,40);
    block6=new Box(375,277.5,30,40);
    block7=new Box(405,277.5,30,40);
    block8=new Box(255,237.5,30,40);
    block9=new Box(285,237.5,30,40);
    block10=new Box(315,237.5,30,40);
    block11=new Box(345,237.5,30,40);
    block12=new Box(375,237.5,30,40);
    block13=new Box(285,197.5,30,40);
    block14=new Box(315,197.5,30,40);
    block15=new Box(345,197.5,30,40);
    block16=new Box(315,157.5,30,40);
    block17=new Box(470,377.5,30,40);
    block18=new Box(500,377.5,30,40);
    block19=new Box(530,377.5,30,40);
    block20=new Box(560,377.5,30,40);
    block21=new Box(590,377.5,30,40);
    block22=new Box(500,337.5,30,40);
    block23=new Box(530,337.5,30,40);
    block24=new Box(560,337.5,30,40);
    block25=new Box(530,297.5,30,40);
    polygon=new Polygon(50,400,60);
    shooter=new Shooter(polygon.body,{x:100,y:200});
 
}
function draw(){
    background("grey");
    Engine.update(engine);
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    polygon.display();
    shooter.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    shooter.fly();
}

function keyPressed(){
    if(keyCode==32){
        shooter.attach(polygon.body);
    }
}