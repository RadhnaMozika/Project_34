const Engine = Matter.Engine, 
World = Matter.World, 
Bodies = Matter.Bodies, 
Body = Matter.Body, 
Constraint = Matter.Constraint,
Mouse = Matter.Mouse,
MouseConstraint = Matter.MouseConstraint;

var engine, world;
var pend1, pend2, pend3, pend4, pend5;
var sling1, sling2, sling3, sling4, sling5;

function setup(){
    var canv = createCanvas(windowWidth/2, windowHeight/1.5);

    engine = Engine.create();
    world = engine.world;

    let canvasmouse=Mouse.create(canvas.elt);
     canvasmouse.pixelRatio=pixelDensity();
     
     var options={
       mouse:canvasmouse
     };

     mConstraint=MouseConstraint.create(engine,options);
     World.add(world,mConstraint);

    pend1 = new Pendulum(width/2-160, height-100, "#289AFF");
    pend2 = new Pendulum(width/2-80, height-100, "#289AFF");
    pend3 = new Pendulum(width/2, height-100, "#289AFF");
    pend4 = new Pendulum(width/2+80, height-100, "#289AFF");
    pend5 = new Pendulum(width/2+160, height-100, "#289AFF");

    sling1 = new Sling(pend1.body, {x : pend1.body.position.x, y : height-320});
    sling2 = new Sling(pend2.body, {x : pend2.body.position.x, y : height-320});
    sling3 = new Sling(pend3.body, {x : pend3.body.position.x, y : height-320});
    sling4 = new Sling(pend4.body, {x : pend4.body.position.x, y : height-320});
    sling5 = new Sling(pend5.body, {x : pend5.body.position.x, y : height-320});

    Engine.update(engine);

}

function draw(){
    background(0);

    Engine.run(engine);

    ellipseMode(RADIUS);
    pend1.display();
    pend2.display();
    pend3.display();
    pend4.display();
    pend5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pend1.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    
}