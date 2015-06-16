
define([
		'renderer'
	], function(
		renderer
	){

	var terrain;

	var texture = THREE.ImageUtils.loadTexture(
        'textures/patterns/checker.png'
	);
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat = new THREE.Vector2(10, 10);
	texture.anisotropy = renderer.getMaxAnisotropy();

	var material = new THREE.MeshPhongMaterial({
		color: 0xffffff,
		specular: 0xffffff,
		shininess: 20,
		shading: THREE.FlatShading,
		map: texture
	});

	var geometry = new THREE.PlaneGeometry(100, 100);

	var terrain = new THREE.Mesh(geometry, material);

	terrain.rotation.x = -Math.PI / 2;

	return terrain

});
