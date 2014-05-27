/**
 * Created by widmoser on 24/05/14.
 */

define(['underscore'], function (_) {

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

    function FontObject(x, y, character) {
        GraphicalObject.call(this, x, y);
        this.character = character;
    }
    FontObject.prototype = Object.create(GraphicalObject.prototype);
    FontObject.prototype.constructor = FontObject;

    function GClef(x, y) {
        FontObject.call(this, x, y, "\uE050");
    }
    GClef.prototype = Object.create(FontObject.prototype);
    GClef.prototype.constructor = GClef;

    var NoteHeads = {
        black : "\uE0A4"
    }

    function NoteHead(x, y, type) {
        if (_.isUndefined(type)) {
            type = NoteHeads.black;
        }
        FontObject.call(this, x, y, type);
    }
    NoteHead.prototype = Object.create(FontObject.prototype);
    NoteHead.prototype.constructor = NoteHead;

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
        FontObject : FontObject,
        NoteHeads : NoteHeads,
        NoteHead : NoteHead,
        Score : Score
    };
});




