var transportationModes = ["Bicycle", "Motorbike", "Car", "Aeroplane"];
var modelNames = {
    Bicycle: "BMC",
    Motorbike: "Moto Guzzi",
    Car: "Ford Mustang",
    Aeroplane: "Airbus A330"
};
transportationModes.forEach(function (mode) {
    console.log("I would like to own ".concat(modelNames[mode], " ").concat(mode));
});
