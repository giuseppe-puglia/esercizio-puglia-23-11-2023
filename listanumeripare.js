
let listanumeri =[1,2,3,4,5,6,7,8,9,10]

function filtranumeripari (lista){
let listanumeripari = lista.filter((index)=> index % 2==0);
return listanumeripari;

}
let listanumeripari = filtranumeripari(listanumeri)
console.log(listanumeripari)
