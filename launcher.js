class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 100
        }
        
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(a){
    this.launcher.bodyA=a

    }

    display(){

        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
           
            push ()
            stroke(48,22,8)
          
                strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x, pointB.y);


            pop ()
    
        }
        
    }
}