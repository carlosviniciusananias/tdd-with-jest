exports.calculateTrip = function (hour, disct) {
    if(hour instanceof Date) {
        if(hour.getHours() > 22 || hour.getHours() < 6) {
            return dist * 3.9
        } else {
            if(hour.getDay() === 0) {
                return dist * 3
            } else {
                return dist * 2.1
            }
        }
    } else {
        return -1
    }
}