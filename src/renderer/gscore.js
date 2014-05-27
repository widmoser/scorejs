/**
 * Created by widmoser on 24/05/14.
 */

define([], function () {

    /**
     * Base class for all graphical objects. It has properties to specify the size and location of an object.
     * @param x Position along the x Axis.
     * @param y Position along the y Axis.
     * @constructor
     */
    function GraphicalObject(x, y)
    {
        this.x = x;
        this.y = y;
    }

    function Staff(x, y, height) {
        GraphicalObject.call(this, x, y);
        this.height = height;
    }
    Staff.prototype = Object.create(GraphicalObject.prototype);
    Staff.prototype.constructor = Staff;

    function GClef(x, y, size) {
        GraphicalObject.call(this, x, y);
        this.size = size;
    }
    GClef.prototype = Object.create(GraphicalObject.prototype);
    GClef.prototype.constructor = GClef;

    /**
     * Graphical representation of the score. It's a collection of graphical objects.
     * @constructor
     */
    function Score() {

        this.objects = [];

    }

    return {
        Object : Object,
        Staff : Staff,
        GClef : GClef,
        Score : Score
    };
});




