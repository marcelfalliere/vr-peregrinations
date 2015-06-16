define([
		'OrbitControls',
		'camera',
		'renderer'
	], function(
		OrbitControls,
		camera,
		renderer
	){

	var controls;

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.rotateUp(Math.PI / 4);
	controls.target.set(
		camera.position.x + 0.1,
		camera.position.y,
		camera.position.z
	);
	controls.noZoom = true;
	controls.noPan = true;

	return controls;

});
