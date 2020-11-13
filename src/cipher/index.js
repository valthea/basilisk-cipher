import { values } from './key.json'

export const getPassword = (month, day, hour) => {
    const x = (month + hour) % values.length
    const y = (day + hour) % values[x].length
    return values[x][y]
}