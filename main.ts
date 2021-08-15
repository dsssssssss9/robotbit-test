input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(200)
    for (let index = 0; index < 512; index++) {
        led.toggle(randint(0, 4), randint(0, 4))
        basic.pause(randint(32, 96))
        music.playTone(12 * randint(15, 30), music.beat(BeatFraction.Sixteenth))
    }
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
})
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.show()
strip.showColor(neopixel.colors(NeoPixelColors.Violet))
music.setTempo(240)
basic.forever(function () {
	
})
