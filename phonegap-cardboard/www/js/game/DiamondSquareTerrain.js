
define([
		
	], function(
	
	){

	function DiamondSquareTerrain(width, height, segments) {
		this.width = width;
		this.height = height;
		this.segments = segments;	
		this.smoothingFactor = 20;

		this.terrainData = new Array();

		for(var i = 0; i <= this.segments; i++) {
			this.terrainData[i] = new Array();
			for(var j = 0; j <= this.segments; j++) {
				this.terrainData[i][j] = 0;
			}
		}
	}

	function generateData() {
		var size = this.segments+1;
		for(var length = this.segments; length >= 2; length /= 2) {
			var half = length/2;
			this.smoothingFactor /= 2;

			// generate the new square values
			for(var x = 0; x < this.segments; x += length) {
				for(var y = 0; y < this.segments; y += length) {
					var average = this.terrainData[x][y]+ // top left
					this.terrainData[x+length][y]+ // top right
					this.terrainData[x][y+length]+ // lower left
					this.terrainData[x+length][y+length]; // lower right
					average /= 4;
					average += 2*this.smoothingFactor*Math.random()-this.smoothingFactor;
					
					this.terrainData[x+half][y+half] = average;
				}
			}

			// generate the diamond values
			for(var x = 0; x < this.segments; x += half) {
				for(var y = (x+half)%length; y < this.segments; y += length) {
					var average = this.terrainData[(x-half+size)%size][y]+ // middle left
							this.terrainData[(x+half)%size][y]+ // middle right
							this.terrainData[x][(y+half)%size]+ // middle top
							this.terrainData[x][(y-half+size)%size]; // middle bottom
					average /= 4;
					average += 2*this.smoothingFactor*Math.random()-this.smoothingFactor;
					
					this.terrainData[x][y] = average;

					// values on the top and right edges
					if(x === 0)
						this.terrainData[this.segments][y] = average;
					if(y === 0)
						this.terrainData[x][this.segments] = average;
				}
			}
		}
	}

	DiamondSquareTerrain.prototype.addNewTerrainToScene = function(scene) {
		this.data = generateData.apply(this);

		this.geometryGround = new THREE.PlaneGeometry(this.width, this.height, this.segments, this.segments);

		var index = 0;
		for(var i = 0; i <= this.segments; i++) {
			for(var j = 0; j <= this.segments; j++) {
				this.geometryGround.vertices[index].z = this.terrainData[i][j] ;
				index++;
			}
		}

	
		this.materialGround = new THREE.MeshPhongMaterial({
			color: 0x00FF00
		});

		var mesh = new THREE.Mesh(this.geometryGround, this.materialGround);

		mesh.rotation.x = -Math.PI / 2;

		mesh.alpha = 0.5

		scene.add(mesh);

	}

	return DiamondSquareTerrain;

});
