function isMultipleOf(num: number, multiple: number) {
    return (num % multiple) === 0
}

function isMultipleOf4(num: number) {
    const MULTIPLE_OF_4 = 4
    return isMultipleOf(num, MULTIPLE_OF_4)
}

function isMultipleOf100(num: number) {
    const MULTIPLE_OF_100 = 100
    return isMultipleOf(num, MULTIPLE_OF_100)
}

function isMultipleOf400(num: number) {
    const MULTIPLE_0F_400 = 400
    return isMultipleOf(num, MULTIPLE_0F_400)
}

export function isLeap(year: number) {
    if (
        (isMultipleOf4(year) && !isMultipleOf100(year))
        || isMultipleOf400(year)) {
        return true
    }
    return false
}

