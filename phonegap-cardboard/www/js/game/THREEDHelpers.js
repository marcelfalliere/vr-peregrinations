define([], function(){
	return {
		ArrowMarkerAtOrigin:{

			addToScene:function(scene){
			//debugger;
			var dir = new THREE.Vector3( 1, 0, 0 );
			var origin = new THREE.Vector3( 0, 0, 0 );
			var length = 10;
			var hex = 0xff0000;
			var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
			scene.add( arrowHelper );
			var dir = new THREE.Vector3( 0, 1, 0 );
			var origin = new THREE.Vector3( 0, 0, 0 );
			var hex = 0x00ff00;
			var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
			scene.add( arrowHelper );
			var dir = new THREE.Vector3( 0, 0, 1 );
			var origin = new THREE.Vector3( 0, 0, 0 );
			var hex = 0x0000ff;
			var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
			scene.add( arrowHelper );

			}

		}
	}
})