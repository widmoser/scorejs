/**
 * Created by widmoser on 24/05/14.
 */

/**
 * The WebGL renderer draws to a WebGL context.
 * @constructor
 */
function PixiRenderer() {

    Staff.prototype.draw = function(gobj) {

    }

    /**
     * Renders a graphical score
     * @param target The canvas element to draw on
     * @param gscore The graphical representation of the score
     * @param options A set of options that define parameters for drawing.
     */
    this.render = function(target, gscore, options) {
        gscore.objects.forEach(function(gobj) {
            this.draw(gobj);
        });
    }

    this.draw = function(gobj) {
        gobj
    }

}

