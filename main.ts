input.onButtonPressed(Button.B, function () {
    if (CURRENT_COLOR == 0) {
        CURRENT_COLOR = 1
        RED = 0
        GREEN = 0
        BLUE = 255
    } else if (CURRENT_COLOR == 1) {
        CURRENT_COLOR = 2
        RED = 0
        GREEN = 255
        BLUE = 0
    } else if (CURRENT_COLOR == 2) {
        CURRENT_COLOR = 3
        RED = 255
        GREEN = 0
        BLUE = 0
    } else {
        CURRENT_COLOR = 0
        RED = 0
        GREEN = 0
        BLUE = 0
    }
    RGB_LIGHT.showColor(neopixel.rgb(RED, GREEN, BLUE))
})
let RGB_LIGHT: neopixel.Strip = null
let BLUE = 0
let GREEN = 0
let RED = 0
let CURRENT_COLOR = 0
CURRENT_COLOR = 0
RED = 0
GREEN = 0
BLUE = 0
RGB_LIGHT = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
	
})
