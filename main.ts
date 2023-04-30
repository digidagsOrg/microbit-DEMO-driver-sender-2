input.onButtonPressed(Button.A, function () {
    if (program == 0) {
        if (stop == 0) {
            radio.sendNumber(1)
            stop = 1
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
        } else {
            radio.sendNumber(11)
            basic.showLeds(`
                # # . . .
                # # . . .
                # # . . .
                # # . . .
                # # . . .
                `)
            stop = 0
        }
    } else {
    	
    }
})
function selectProgram () {
    basic.showIcon(IconNames.Square)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            return 0
        } else {
            if (input.buttonIsPressed(Button.B)) {
                return 1
            }
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    if (program == 0) {
        if (stop == 0) {
            radio.sendNumber(3)
            stop = 1
            basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                `)
        } else {
            radio.sendNumber(33)
            basic.showLeds(`
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                `)
            stop = 0
        }
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (program == 0) {
        if (stop == 0) {
            radio.sendNumber(2)
            stop = 1
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
        } else {
            radio.sendNumber(22)
            basic.showLeds(`
                . . . # #
                . . . # #
                . . . # #
                . . . # #
                . . . # #
                `)
            stop = 0
        }
    }
})
let stop = 0
let program = 0
selectProgram()
program = selectProgram()
if (program == 0) {
    radio.setGroup(1)
    stop = 0
    basic.showIcon(IconNames.Heart)
} else {
    if (program == 1) {
        basic.showIcon(IconNames.Happy)
    }
}
basic.forever(function () {
    if (program == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
    }
})
