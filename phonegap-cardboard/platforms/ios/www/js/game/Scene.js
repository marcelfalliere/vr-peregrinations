define(
	[
		'preferences',
		'THREEDHelpers',
		'camera',
		'controls',
		'renderer',
		'container',
		'sky',
		'checkFloor',
		'DiamondSquareTerrain'
	], 
	function(
		preferences,
		THREEDHelpers,
		camera,
		controls,
		renderer,
		container,
		sky,
		checkFloor,
		DiamondSquareTerrain
	)
{

	function Scene(){

		this.scene = new THREE.Scene();;
		this.effect;
		this.clock = new THREE.Clock();

		// Affichage pour cardboard ou pas ? (écran coupé en deux)
		if (preferences.STEREO_ON) {
			effect = new THREE.StereoEffect(renderer);
		}

		// Fog
		this.scene.fog = new THREE.Fog(0x0b0e3b, 0, 200);

		// Camera
		this.scene.add(camera);

		// Repaires d'aide à l'origine
		if (preferences.DEBUG_ORIGIN_MARKERS) {
			THREEDHelpers.ArrowMarkerAtOrigin.addToScene(this.scene);
		}

		// Sky
		this.scene.add(sky);

		// Terrain
		//this.scene.add(checkFloor);

		var diamondSquere = new DiamondSquareTerrain(200, 200, 4)
		diamondSquere.addNewTerrainToScene(this.scene);


		// Lights
		var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
		this.scene.add(light);

		// Les cylindres
		//var n = 1;
		//for (var i = -n ; i < n ; i ++) {
		//	for (var j = -n ; j < n ; j ++) {
//
		//		var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
		//		var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
		//		var cylinder = new THREE.Mesh( geometry, material );
		//		cylinder.position.x = i*30;
		//		cylinder.position.z = j*30;
		//		this.scene.add( cylinder );
		//		
		//	}				
		//}


		// Load model

		var loader = new THREE.JSONLoader();
		loader.load( 'models/Tree2.json', (function ( geometry, materials ) {
			var tree = new THREE.Mesh(geometry, materials[0])
			tree.scale.x=5;
			tree.scale.y=5;
			tree.scale.z=5;

			for (var i = 0 ; i < 5 ; i++){
				var clone = tree.clone();

				clone.position.x = THREE.Math.randFloat(-100,100);
				clone.position.z = THREE.Math.randFloat(-100,100);
				
				this.scene.add(clone);
				
			}



		}).bind(this) );
	}

	Scene.prototype.start = function(){

		function initWindowListeners(){
			// Resize
			window.addEventListener('resize', resize, false);
			setTimeout(resize, 1);
			
			function resize() {
				var width = container.offsetWidth;
				var height = container.offsetHeight;

				camera.aspect = width / height;
				camera.updateProjectionMatrix();

				renderer.setSize(width, height);
				if (preferences.STEREO_ON)
					effect.setSize(width, height);
			}

			// Orientation
			window.addEventListener('deviceorientation', setOrientationControls, true);

			function setOrientationControls(e) {
				if (!e.alpha) {
					return;
				}

				controls = new THREE.DeviceOrientationControls(camera, true);
				controls.connect();
				controls.update();

				window.removeEventListener('deviceorientation', setOrientationControls, true);
			}
		}

		function update(dt) {
			camera.updateProjectionMatrix();
			controls.update(dt);
		}

		function render(dt) {
			if (preferences.STEREO_ON)
				effect.render(this.scene, camera);
			else 
				renderer.render(this.scene, camera)
		}

		function animate(){
			requestAnimationFrame(animate.bind(this));

			update.call(this, this.clock.getDelta());
			render.call(this, this.clock.getDelta());
		}

		initWindowListeners();

		animate.apply(this);

	}

	return Scene;


	
})