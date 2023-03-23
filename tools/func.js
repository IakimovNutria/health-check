
export const max = (first, second) => {
    return first > second ? first : second;
};

export const zip = (array1, array2) => {
    const res = [];
    for (let i = 0; i < max(array1.length, array2.length); i++) {
        res.push([array1[i], array2[i]]);
    }
    return res;
};

export const getDateKey = (key, date) => {
    return `${key.toString()}_${date.getDate()}_${date.getMonth()}_${date.getFullYear()}`
}
