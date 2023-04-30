def on_button_pressed_a():
    global stop
    if stop == 0:
        radio.send_number(1)
        stop = 1
        basic.show_leds("""
            # . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        # . . . .
        """)
    else:
        radio.send_number(11)
        basic.show_leds("""
            # # . . .
                        # # . . .
                        # # . . .
                        # # . . .
                        # # . . .
        """)
        stop = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global stop
    if stop == 0:
        radio.send_number(3)
        stop = 1
        basic.show_leds("""
            # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
        """)
    else:
        radio.send_number(33)
        basic.show_leds("""
            # # . # #
                        # # . # #
                        # # . # #
                        # # . # #
                        # # . # #
        """)
        stop = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global stop
    if stop == 0:
        radio.send_number(2)
        stop = 1
        basic.show_leds("""
            . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
        """)
    else:
        radio.send_number(22)
        basic.show_leds("""
            . . . # #
                        . . . # #
                        . . . # #
                        . . . # #
                        . . . # #
        """)
        stop = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

stop = 0
radio.set_group(1)
stop = 0
basic.show_icon(IconNames.HEART)

def on_forever():
    pass
basic.forever(on_forever)
