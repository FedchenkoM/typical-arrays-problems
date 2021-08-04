exports.min = function min(array) {
    return isNotEmpty(array) ? Math.min(...array) : 0
}

exports.max = function max(array) {
    return isNotEmpty(array) ? Math.max(...array) : 0
}

exports.avg = function avg(array) {
    if (isNotEmpty(array)) {
        return array.reduce((acc, cur) => acc += cur, 0) / array.length
    }
    return 0
}

function isNotEmpty(arr) {
    return (arr && arr.length > 0) ? true : false
}

