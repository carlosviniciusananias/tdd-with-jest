const calculate = require('../calculateTrip')

test('Should be normal fare', function() {
    const fare = calculate.calculateTrip(new Date('2021-10-10T10:00'), 1000)
    expect(fare).toBe(2100)
})

test('Should be sunday fare', function() {
    const fare = calculate.calculateTrip(new Date('2021-10-10T10:00'), 1000)
    expect(fare).toBe(3000)
})

test('Should be overnight fare', function() {
    const fare = calculate.calculateTrip(new Date('2021-10-10T23:00'), 1000)
    expect(fare).toBe(3900)
})

test('Should be wrong date', function() {
    const fare = calculate.calculateTrip('2021-10-10T23:00', 1000)
    expect(fare).toBe(-1)
})