const fs=require('fs');


function save(){
var str="sto provando/nsefunziona";
fs.sync('prova.txt',str);
}