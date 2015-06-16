require.config({
    paths: {
        THREE: '../../js/libs/three.js/build/three.min',
        StereoEffect: '../../js/libs/three.js/examples/js/controls/OrbitControls',
        OrbitControls: '../../js/libs/three.js/examples/js/effects/StereoEffect'
    },
    shim: {
        THREE: {
            exports: 'THREE'
        },
        OrbitControls: {
            deps:['THREE']
        },
        StereoEffect: {
            deps:['THREE']
        },
    },
    baseUrl: '/js/game',
    deps:['main']
})