"""
Este programa recibe la temperatura del micro:bit emisor, la muestra en pantalla, 
la manda por serial y guarda los máximos y los mínimos
"""

RADIO_GROUP = 127
minimo = 255
maximo = 0

welcome_text = "RECEPTOR " + str(RADIO_GROUP)
basic.show_string(welcome_text)
radio.set_group(RADIO_GROUP)

def radio_handler(temperatura:number):
    global minimo,maximo
    minimo = min(minimo, temperatura)
    maximo = max(maximo, temperatura)

    basic.show_number(temperatura)
    serial.write_value("Temperatura",temperatura)

def show_min():
    text = "min" + minimo
    basic.show_string(text)
    basic.pause(500)

def show_max():
    text = "max" + maximo
    basic.show_string(text)
    basic.pause(500)


input.on_button_pressed(Button.A, show_min)
input.on_button_pressed(Button.B, show_max)
radio.on_received_number(radio_handler)