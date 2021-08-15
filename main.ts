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
        basic.pause(32)
        music.playTone(12 * randint(10, 24), music.beat(BeatFraction.Eighth))
    }
})
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.show()
strip.showColor(neopixel.colors(NeoPixelColors.Violet))
music.setTempo(200)
control.inBackground(function () {
	
})
