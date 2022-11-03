/** 
Este programa recibe la temperatura del micro:bit emisor, la muestra en pantalla, 
la manda por serial y guarda los máximos y los mínimos

 */
let RADIO_GROUP = 127
let minimo = 255
let maximo = 0
let welcome_text = "RECEPTOR " + ("" + RADIO_GROUP)
basic.showString(welcome_text)
radio.setGroup(RADIO_GROUP)
input.onButtonPressed(Button.A, function show_min() {
    let text = "min" + minimo
    basic.showString(text)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function show_max() {
    let text = "max" + maximo
    basic.showString(text)
    basic.pause(500)
})
radio.onReceivedNumber(function radio_handler(temperatura: number) {
    
    minimo = Math.min(minimo, temperatura)
    maximo = Math.max(maximo, temperatura)
    basic.showNumber(temperatura)
    serial.writeValue("Temperatura", temperatura)
})
