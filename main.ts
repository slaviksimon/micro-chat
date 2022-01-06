input.onButtonPressed(Button.A, function () {
    radio.sendString("AHOJ")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("KIS KIS")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("SOS")
})
radio.setGroup(1)
