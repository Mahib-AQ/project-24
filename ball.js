class Ball {

    constructor(x, y, diameter) {

        this.body = Bodies.circle(x, y, diameter);
        this.diameter = diameter;
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos.x, pos.y, this.diameter, this.diameter);


    }


}