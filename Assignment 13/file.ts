let transportationModes = ["Bicycle", "Motorbike", "Car", "Aeroplane"]
let modelNames = {
    Bicycle : "BMC",
    Motorbike : "Moto Guzzi",
    Car: "Ford Mustang",
    Aeroplane: "Airbus A330"
}

transportationModes.forEach((mode: string) => {
    console.log(`I would like to own ${modelNames[mode]} ${mode}`)
})