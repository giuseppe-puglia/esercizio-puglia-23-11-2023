
let array1 =["cane","gatto","topo","pappagallo","puma"];
let array2 =["pasta","carne","verdura","legumi"];
let lunghezzaminimaparola= 5
function filtraperlunghezza (array1,array2,lunghezzaminima){
let arrayunito =array1.concat(array2);
let arrayunitofiltrato= arrayunito.filter((index)=>index.length >=lunghezzaminima);
return arrayunitofiltrato;


}
let arrayunitofiltrato = filtraperlunghezza(array1,array2,lunghezzaminimaparola)
console.log(arrayunitofiltrato)