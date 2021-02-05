function GenerateOctahedron(top, left, right, front, back, bottom)
{

  return new Float32Array( [
	    // Avant
	     //Face sup 1
	     right, 0,  0,
	     0,  0,  -back,
	     0,  top, 0,

	     //Face sup 2
	     right, 0,  0,
	     0,  top, 0,
	     0,  0,  front,

	     // Derriere
	     right, 0,  0,
	     0,  -bottom,  0,
	     0, 0,  -back,

	     0, -bottom, 0,
	     right,  0,  0,
	     0,  0,  front,

	     // Côté 1
	     0,  -bottom,  0,
	     -left, 0,  0,
	     0, 0,  -back,

	     -left, 0,  0,
	     0,  top,  0,
	     0, 0,  -back,

	     0, top,  0,
	     -left, 0,  0,
	     0,  0,  front,

	     -left, 0, 0,
	     0, -bottom, 0,
	     0, 0, front,
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