
define([
		'renderer'
	], function(
		renderer 
	){

	var container;

	container = document.getElementById('canvas');

	container.appendChild(renderer.domElement);

	return container

});
