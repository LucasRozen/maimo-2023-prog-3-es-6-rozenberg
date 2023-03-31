export const sum = (...numbers) => numbers.reduce((ac, num) => ac + num);

export const getRandom = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);