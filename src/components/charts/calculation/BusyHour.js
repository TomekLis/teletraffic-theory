export function calculateBusiestHour(minutes, calls) {
    const hours = devideToHours(minutes)
    for (let index = 0; index < hours.length; index++) {
        const hour = hours[index];
        const averageTraffic = calculateAverage(calls.slice(minutes.indexOf(hour.startMinute), minutes.indexOf(hour.endMinute)));
        hour.averageTraffic = averageTraffic;
    }
    const busiestHour = Math.max(hours.map(function (o) {
            o.averageTraffic;
            return o;
        }))
        // return hours;
    }
    export function calculateAverage(dataArray) {
        var sum = dataArray.reduce((previous, current) => current += previous);
        var avg = sum / dataArray.length;
        return avg;
    }

    function devideToHours(minutes) {
        var hours = []
        for (let index = 0; index < minutes.length; index++) {
            const element = minutes[index];
            if (element >= 60) {
                var startMinute = closest(element - 60, minutes.slice(0, index))
                var hour = {
                    startMinute: startMinute,
                    endMinute: element
                }
                hours.push(hour);
            }
        }
        return hours;
    }

    function closest(number, arr) {
        var curr = arr[0]
        arr.forEach(element => {
            if (Math.abs(number - element) < Math.abs(number - curr)) {
                curr = element
            }
        });
        return curr;
    }