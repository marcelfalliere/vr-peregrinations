
define([
		
	], function(
	
	){

	var sky;

	var geometry = new THREE.SphereGeometry(10000, 64, 32);
	var vertices = geometry.vertices;
	var faces = geometry.faces;
	var colorTop = new THREE.Color(0xdc72aa);
	var colorMiddle = new THREE.Color(0xfbdfd3);
	var colorBottom = new THREE.Color(0xdc72aa);

	for (var i = 0, l = faces.length; i < l; i++) {
		var face = faces[i];

		var vertex1 = vertices[face.a];
		var vertex2 = vertices[face.b];
		var vertex3 = vertices[face.c];

		var color1 = colorMiddle.clone();
		color1.lerp(vertex1.y > 0 ? colorTop : colorBottom, Math.abs(vertex1.y) / 6000);

		var color2 = colorMiddle.clone();
		color2.lerp(vertex2.y > 0 ? colorTop : colorBottom, Math.abs(vertex2.y) / 6000);

		var color3 = colorMiddle.clone();
		color3.lerp(vertex3.y > 0 ? colorTop : colorBottom, Math.abs(vertex3.y) / 6000);

		face.vertexColors.push(color1, color2, color3);
	}

	var material = new THREE.MeshBasicMaterial({
		//vertexColors: THREE.VertexColors,
		side: THREE.BackSide,
		depthWrite: false,
		depthTest: false,
		fog: false,
		map: THREE.ImageUtils.loadTexture('textures/bg2.png')
	});

	sky = new THREE.Mesh(geometry, material);

	return sky

});
