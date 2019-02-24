class Planet {
    constructor (orbit_radius, translation_speed, rotation_speed, angle, planet_radious, color, orbitado) {
      this.orbit_radius = orbit_radius;
      this.translation_speed = translation_speed;
      this.rotation_speed = rotation_speed;
      this.angle=angle;
      this.mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(planet_radious, 1), new THREE.MeshBasicMaterial({ color: color , wireframe:true}));
      this.orbitado=orbitado;
    }

    update_planet(simulation_speed){
        if(this.orbitado!=null){
            this.translation(this.orbitado, this, simulation_speed);
        }

        if(this.rotation_speed!=0){
            this.rotation(this, simulation_speed);
        }
    }

    translation(orbitado, orbitante, simulation_speed){        
        var x=orbitado.mesh.position.x + orbitante.orbit_radius * Math.sin(orbitante.angle);
        var y=orbitado.mesh.position.y + orbitante.orbit_radius * Math.cos(orbitante.angle);

        orbitante.mesh.position.x=x;
        orbitante.mesh.position.y=y;

        orbitante.angle+=simulation_speed*orbitante.translation_speed;        
    }

    rotation(orbitante, simulation_speed){
      orbitante.mesh.rotation.z += simulation_speed*orbitante.rotation_speed;
      orbitante.mesh.rotation.x += simulation_speed*orbitante.rotation_speed*0.1;
    }



  }
