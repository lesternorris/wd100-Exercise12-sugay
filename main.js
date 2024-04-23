function convertHeight() {
    let feet = parseFloat(document.getElementById("feet").value);
    let inches = parseFloat(document.getElementById("inches").value);
    let centimeters = parseFloat(document.getElementById("centimeters").value);

    let feetToInches = feet * 12;
    let feetToCentimeters = feet * 30.48;
    let inchesToFeet = inches / 12;
    let inchesToCentimeters = inches * 2.54;
    let centimetersToFeet = centimeters / 30.48;
    let centimetersToInches = centimeters / 2.54;

    document.getElementById("feetToInches").innerText = feetToInches + " inches";
    document.getElementById("feetToCentimeters").innerText = feetToCentimeters + " cm";
    document.getElementById("inchesToFeet").innerText = inchesToFeet.toFixed(2) + " feet";
    document.getElementById("inchesToCentimeters").innerText = inchesToCentimeters.toFixed(2) + " cm";
    document.getElementById("centimetersToFeet").innerText = centimetersToFeet.toFixed(2) + " feet";
    document.getElementById("centimetersToInches").innerText = centimetersToInches.toFixed(2) + " inches";
}