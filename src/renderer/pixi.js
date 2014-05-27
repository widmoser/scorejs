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

        var graphics = new pixi.Graphics();
        stage.addChild(graphics);

        requestAnimFrame(animate);

        function animate() {

            requestAnimFrame(animate);

            // render the stage
            renderer.render(stage);
        }

        gscore.Staff.prototype.draw = function() {
            graphics.lineStyle(1, 0x000000);
            var y = this.y;
            var yIncr = this.height / 5;
            for (var i = 0; i < 5; ++i)
            {
                graphics.moveTo(this.x, y);
                graphics.lineTo(width, y);
                y += yIncr;
            }
        }

        gscore.GClef.prototype.draw = function() {
            var text = new pixi.Text("\uE050", {font: this.size + "px bravura", fill:"black"});
            var container = new pixi.DisplayObjectContainer();
            container.addChild(text);
            container.x = this.x;
            container.y = this.y;
            stage.addChild(container);
        }

    }



    /**
     * Renders a graphical score
     * @param target The canvas element to draw on
     * @param gscore The graphical representation of the score
     * @param options A set of options that define parameters for drawing.
     */
    PixiRenderer.prototype.render = function(score) {
        score.objects.forEach(function(gobj) {
            gobj.draw();
        });
    };

    return {
        PixiRenderer : PixiRenderer
    }

});


