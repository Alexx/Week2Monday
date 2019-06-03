var literToGallon = function(unit) {
	var unitType = prompt("Liters or Gallons (L/G) ");
  unit = parseFloat(prompt("How many unit?"));
  if (unitType === "L") {
  	return alert(unit / 3.785);
  } else if(unitType === "G") {
		return alert(unit * 3.785);
  } else {
  	alert("Check unit.")
  }
}

literToGallon();
