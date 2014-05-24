/**
 * Created by widmoser on 24/05/14.
 */

/**
 * Base class for all graphical objects. It has properties to specify the size and location of an object.
 * @param x Position along the x Axis.
 * @param y Position along the y Axis.
 * @param width Width of the bounding box containing the object.
 * @param height Height of the bounding box containing the object.
 * @constructor
 */
function Object(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function Staff(x, y, width, height) {
    GObject.call(x, y, width, height);
}
Staff.prototype = new GObject;

/**
 * Graphical representation of the score. It's a collection of graphical objects.
 * @constructor
 */
function Score() {

    this.objects = [];

}


