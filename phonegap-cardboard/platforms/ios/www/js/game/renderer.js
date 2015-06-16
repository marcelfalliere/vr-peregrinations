
define([
		
	], function(
	
	){

	var renderer;

	renderer = new THREE.WebGLRenderer({
		antialias:true,
		antialiasing:true
	});
	renderer.autoClear = false;
	renderer.setClearColor(0x404040);
	renderer.setPixelRatio(window.devicePixelRatio);


	return renderer

});
