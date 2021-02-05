function GenerateOctahedron(top, left, right, front, back, bottom)
{
	var a = [0,top,0];
	var b = [0,0,-back];
	var c = [right,0,0];
	var d = [0,-bottom,0];
	var e = [-left,0,0];
	var f = [0,0,front];

	return new Float32Array( [

		// Avant
		//Face sup 1 ABC
		b[0], b[1], b[2],
		a[0], a[1], a[2],
		c[0], c[1], c[2],

		//Face sup 2 ACF
		a[0], a[1], a[2],
		f[0], f[1], f[2],
		c[0], c[1], c[2],

		//Face sup 3 AEF
		a[0], a[1], a[2],
		e[0], e[1], e[2],
		f[0], f[1], f[2],

		//Face sup 4 AEB
		a[0], a[1], a[2],
		b[0], b[1], b[2],
		e[0], e[1], e[2],

		//Face inf 1 BCD
		b[0], b[1], b[2],
		c[0], c[1], c[2],
		d[0], d[1], d[2],

		//Face inf 2 EBD
		e[0], e[1], e[2],
		b[0], b[1], b[2],
		d[0], d[1], d[2],

		//Face inf 3 CFD
		c[0], c[1], c[2],
		f[0], f[1], f[2],
		d[0], d[1], d[2],

		//Face inf 1 EFD
		f[0], f[1], f[2],
		e[0], e[1], e[2],
		d[0], d[1], d[2],

	] );
}

function ChangeCameraPosition(character)
{
  switch (character){
    case 1:
    	return [0,0,0];
    break;
    case 2:
		  return [0,0,0];
    break;
    case 3:
    	return [0,0,0];
    break;
  }
}