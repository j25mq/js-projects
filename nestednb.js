var numbers = [
    [243, 12, 23, 12, 45],
    [34, 2, 1, 553, 55, 3],
    [3, 46, 52, 81, 99, 101]
];

for (let r = 0; r < numbers.length; r++) {
    for (let c = 0; c < numbers[r].length; c++) {
        if (numbers[r][c] % 2 === 0) numbers[r][c] = "even";
        else numbers[r][c] = "odd";
    }
}

console.log(numbers);