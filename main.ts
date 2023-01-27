makerbit.onIrDatagram(function () {
    basic.showNumber(makerbit.irButton())
})
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
