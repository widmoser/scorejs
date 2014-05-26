/**
 * Created by widmoser on 24/05/14.
 */

define(["renderer/gscore", "pixi"], function(gscore, pixi) {

    /**
     * The WebGL renderer draws to a WebGL context.
     * @constructor
     */
    function PixiRenderer(view, width, height, backgroundColor) {

        if (!backgroundColor)
            backgroundColor = 0x66FF99;

        // create an new instance of a pixi stage
        var stage = new pixi.Stage(backgroundColor);

        // create a renderer instance.
        var renderer = pixi.autoDetectRenderer(width, height, view);

        requestAnimFrame(animate);

        function animate() {

            requestAnimFrame(animate);

            // render the stage
            renderer.render(stage);

        }

        gscore.Staff.prototype.draw = function(gobj) {

        }

        /**
         * Renders a graphical score
         * @param target The canvas element to draw on
         * @param gscore The graphical representation of the score
         * @param options A set of options that define parameters for drawing.
         */
        this.render = function(target, score, options) {
            score.objects.forEach(function(gobj) {
                this.draw(gobj);
            });
        }

        this.draw = function(gobj) {
            gobj
        }

    }

    return {
        PixiRenderer : PixiRenderer
    }

});


