/**
 * Created by widmoser on 24/05/14.
 */
requirejs.config({
    shim: {

    },
    baseUrl: '../src',
    paths: {
        pixi: "../lib/bower_components/pixi/bin/pixi",
        requirejs: "../lib/bower_components/requirejs/require"
    },
    packages: [

    ]
});

// Start the main app logic.
requirejs(['pixi', 'renderer/pixi', 'renderer/gscore'],
    function (PIXI, renderer, gscore) {
        var r = new renderer.PixiRenderer(document.getElementById("view"), 800, 600);
        var score = new gscore.Score();
        score.objects.push(new gscore.Staff(0, 100, 800, 50));
        r.render(score);

    }
);
