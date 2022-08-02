input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.pause(500)
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.forever(function () {
	
})
