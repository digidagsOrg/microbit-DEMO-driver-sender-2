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
        if (program == 1) {
            if (Pnumber == 4) {
                basic.showNumber(0)
                Pnumber = 0
            } else {
                if (Pnumber == 0) {
                    basic.showNumber(1)
                    Pnumber = 1
                } else {
                    if (Pnumber == 1) {
                        basic.showNumber(2)
                        Pnumber = 2
                    } else {
                        if (Pnumber == 2) {
                            basic.showNumber(3)
                            Pnumber = 3
                        } else {
                            if (Pnumber == 3) {
                                basic.showNumber(4)
                                Pnumber = 4
                            }
                        }
                    }
                }
            }
        }
    }
})
function selectProgram () {
    basic.showIcon(IconNames.Square)
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            basic.pause(500)
            return 0
        } else {
            if (input.buttonIsPressed(Button.B)) {
                basic.showString("B")
                basic.pause(500)
                return 1
            }
        }
    }
}
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
    } else {
        if (program == 1) {
            radio.sendNumber(Pnumber)
        }
    }
})
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
        if (program == 1) {
            radio.sendNumber(99)
            basic.showIcon(IconNames.No)
        }
    }
})
let stop = 0
let program = 0
let Pnumber = 0
Pnumber = 0
// call selectProgram
program = 0
if (program == 0) {
    radio.setGroup(1)
    stop = 0
    basic.showIcon(IconNames.Heart)
} else {
    if (program == 1) {
        radio.setGroup(2)
        basic.showIcon(IconNames.Happy)
    }
}
