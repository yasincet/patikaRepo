let value = process.argv.slice(2);

const area = (r) => {
  console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI * r * r}.`);
};

area(value);