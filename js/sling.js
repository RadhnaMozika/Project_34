class Sling {
    constructor(bodyA, pointB){
        var options={
            bodyA : bodyA, 
            pointB : pointB, 
            stiffness : 1,
            angularStiffness : 1,
            length : 220
        }

        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;

        this.constraint = Constraint.create(options);

        World.add(world, this.constraint)
    }

    display(){
            
        var point1 = this.constraint.bodyA.position;
        var point2 = this.constraint.pointB;

        strokeWeight(3);
        stroke("#289AFF")
        line(point1.x, point1.y, point2.x, point2.y);

    }
}