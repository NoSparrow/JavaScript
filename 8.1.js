const secretMes1 = "Jaka%20dzisiaj%20pogoda%eF";
const secretMes2 = "Jaka dzisiaj pogoda?";
const decodedComp = decodeURIComponent(secretMes1);
console.log(decodedComp);
const encodeComp = encodeURIComponent(secretMes2);
console.log(encodeComp);
const uri = "http://www.basescripts.com?=Witaj, świecie!";
const encoded = encodeURI(uri);
console.log(encoded);
