function isLandscape(width,height) {
    return (width | height) ? width : height;
}

//  a better way to write code
function isLandscape(width,height) {
    return (width > height);
}

console.log(isLanndscape(300, 400))
