"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expr2expr = exports.xy2expr = exports.expr2xy = exports.indexAt = exports.stringAt = void 0;
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function alphabet(index) {
    return alphabets.charAt(index % alphabets.length);
}
function stringAt(index) {
    const ary = [];
    while (index >= 0) {
        ary.push(alphabet(index));
        index = parseInt((index / alphabets.length) + '', 10) - 1;
    }
    return ary.reverse().join('');
}
exports.stringAt = stringAt;
function indexAt(str) {
    let ret = 0;
    for (let i = 0; i < str.length; i++) {
        ret = 26 * ret + str.charCodeAt(i) - 64;
    }
    return ret - 1;
}
exports.indexAt = indexAt;
// B10 => x,y
function expr2xy(expr) {
    let x = '';
    let y = '';
    for (let i = 0; i < expr.length; i += 1) {
        if (expr.charAt(i) >= '0' && expr.charAt(i) <= '9') {
            y += expr.charAt(i);
        }
        else {
            x += expr.charAt(i).toUpperCase();
        }
    }
    return [indexAt(x), parseInt(y, 10) - 1];
}
exports.expr2xy = expr2xy;
// x,y => B10
function xy2expr(x, y) {
    return `${stringAt(x)}${y + 1}`;
}
exports.xy2expr = xy2expr;
function expr2expr(expr, xn, yn) {
    const [x, y] = expr2xy(expr);
    return xy2expr(x + xn, y + yn);
}
exports.expr2expr = expr2expr;
exports.default = {
    stringAt,
    indexAt,
    expr2xy,
    xy2expr,
    expr2expr,
};
