define([
		'THREE'
	], function(
		THREE
	){

	var camera;

	camera = new THREE.PerspectiveCamera(90, 1, 0.001, 20000);
	
	camera.position.y = 20;
	
	
	return camera;

});