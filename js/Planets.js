function generatePlanetsArray(){

      // orbit_radius = afelio con un decimal + 1700(sun)
      // translation_speed = translation_speed/100
      // rotation_speed = regla de tres -- Tierra(86160sec) = 0.9

    var planets=new Array();

     //Sun
     var sun = new Planet(0, 0, 0.001, 0, 1700, 0xffde00, null);

     planets.push(sun);

     //Mercury
     var mercury = new Planet(2398, 0.04892, 0.0015, 0, 48, 0xA9A9A9, sun);

     planets.push(mercury);


     //Venus
     var venus = new Planet(2789, 0.03502, -0.015, 0, 121, 0x7A5230, sun);
  
     planets.push(venus);

     //Earth
     var earth = new Planet(3220, 0.02978, 0.09, 0, 127, 0x5383d1, sun);
  
     planets.push(earth);

     var moon = new Planet(200, 0.05, 0.05, 0, 20, 0xbb40d1, earth);
 
     planets.push(moon);

     //Mars
     var mars = new Planet(4192, 0.02407, 0.087, 1.85, 67, 0xCC0000, sun);
 
     planets.push(mars);

     var phobos = new Planet(120, 0.07, 0.01, 0, 15, 0x800080, mars);
    
     planets.push(phobos);

     var deimos = new Planet(150, 0.04, 0.01, 0, 10, 0x008000, mars);
     
     planets.push(deimos);

     //Jupiter
     var jupiter = new Planet(9866, 0.01305, 0.219, 0, 1429, 0x8A2908, sun);
     
     planets.push(jupiter);
     
     var io = new Planet(1852, 0.173, 0.5, 0, 36, 0xCC0000, jupiter);
    
     planets.push(io);
     
     var europa = new Planet(2105, 0.137, 0.25, 0, 31, 0x800080, jupiter);
     
     planets.push(europa);
     
     var ganimedes = new Planet(2500, 0.1, 0.12, 0, 52, 0xAC58FA, jupiter);
    
     planets.push(ganimedes);
     
     var calisto = new Planet(3326, 0.082, 0.05, 0, 48, 0x008000, jupiter);
     
     planets.push(calisto);
   

     //Saturno
     var saturno = new Planet(16739, 0.00964, 0.200, 0, 1205, 0xFF8000, sun);
  
     planets.push(saturno);

     var titan = new Planet(2425,0.26, 0.05, 0, 48, 0x008000, saturno);
   
     planets.push(titan);

     var tetis = new Planet(1499, 0.34, 0.47, 0, 10, 0xAC58FA, saturno);
    
     planets.push(tetis);

     var dione = new Planet(1582, 0.51, 0.328, 0, 11, 0xECF8E0, saturno);
    
     planets.push(dione);

     var rea = new Planet(1732, 0.63, 0.19, 0, 15, 0xDF01D7, saturno);
     
     planets.push(rea);

     var japeto = new Planet(4765, 0.572, 0.011, 0, 14, 0xFFFF00, saturno);
 
     planets.push(japeto);

     var mimas = new Planet(1390, 0.159, 0.95, 0, 4, 0xFF0000, saturno);
   
     planets.push(mimas);

     var encelado = new Planet(1442, 0.239, 0.655, 0, 4, 0x008000, saturno);
    
     planets.push(encelado);

     //Urano
     var  urano= new Planet(31744 , 0.00681,  0.124, 0,511 , 0x01DF01, sun );
    
     planets.push(urano);

     var miranda  = new Planet( 129, 0.19, 0.63, 0, 4, 0xFA58D0,urano);
    
     planets.push(miranda);

     var ariel = new Planet( 701, 0.56, 0.35, 0, 11, 0x04B4AE,urano );
    
     planets.push(ariel);

     var umbriel = new Planet( 777, 0.52,  0.216, 0, 11, 0xFFFF00,urano );
    
     planets.push(umbriel);

     var  titania= new Planet( 947, 0.77, 0.1 , 0, 15, 0xAC58FA, urano);
    
     planets.push(titania);

     var  oberon = new Planet( 1094, 0.726, 0.06, 0, 15, 0x01DF01, urano);
   
     planets.push(oberon);


     //Neptuno
     var neptuno = new Planet( 47239, 0.00543, 0.133, 0, 495, 0x0B0B61 , sun);
     
     planets.push(neptuno);

     var  triton= new Planet( 865, 0.015, -0.015, 0, 27, 0xFA58D0, neptuno);
   
     planets.push(triton);

     return planets;

}