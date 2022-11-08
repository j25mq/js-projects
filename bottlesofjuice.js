let x = 99;

while (x >= 1) {
    if (x === 1) {
        console.log(x + " bottle of juice on the wall! "
                    + x + " bottle of juice! Take one down, pass it around... "
                    + (x - 1) + " bottles of juice on the wall!");
    }
    else if (x === 2){
        console.log(x + " bottles of juice on the wall! "
                    + x + " bottles of juice! Take one down, pass it around... "
                    + (x - 1) + " bottle of juice on the wall!");
    }
    else {
        console.log(x + " bottles of juice on the wall! "
                    + x + " bottles of juice! Take one down, pass it around... "
                    + (x - 1) + " bottles of juice on the wall!");
    }
    x = x - 1;
}