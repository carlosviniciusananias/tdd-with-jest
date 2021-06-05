const overnight_start = 22
const overnight_end = 6
const overnight_fare = 3.9
const sunday_fare = 3
const normal_fare = 2.1

const isOvernight = function(date) {
    return date.getHours() > overnight_start || date.getHours() < overnight_end
}

const isSunday = function(date) {
    return date.getDay() === 0
}

exports.calculateTrip = function (date, distance) {
    if(!date instanceof Date) return -1
    if(isOvernight(date)) {
        return distance * overnight_fare
    } else {
        if(isSunday(date)) {
            return distance * sunday_fare
        } else {
            return distance * normal_fare
        }
    }
}