function getElementWidth(content, padding, border) {
const a = content.replace("px", "");
const b = padding.split("px")[0];
const c = border.slice(0, -2);

//console.log(a, b, c);
console.log(typeof a, typeof b, typeof c);
return Number(a) + 2*Number(b) + 2*Number(c);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200



