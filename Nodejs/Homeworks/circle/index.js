const { circleArea, circleCircumference } = require('./circle');

const r = 5; // Yarıçap
const area = circleArea(r);
const circumference = circleCircumference(r);

console.log(`Daire Alanı: ${area}`);
console.log(`Daire Çevresi: ${circumference}`);