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
requirejs(['pixi', 'renderer/pixi'],
    function (PIXI, renderer) {
        var r = new renderer.PixiRenderer(document.getElementById("view"), 800, 600);


    }
);
