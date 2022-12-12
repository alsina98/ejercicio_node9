const hoy = new Date();
console.log(hoy);

const miFecha = new Date(1998, 2, 6);
console.log(miFecha.toLocaleDateString("es-ES"));

let isLater = hoy > miFecha
console.log(isLater);

let date = miFecha.getDate();
console.log(date);

let mounth = miFecha.getMonth() + 1;
console.log(mounth);

let year = miFecha.getFullYear();
console.log(year);
