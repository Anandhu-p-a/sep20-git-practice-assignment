

var num =12;
var flag =true;
for(var i=2;i<num;i++){
    if(i%num==0){flag =false}
}
if(flag){console.log(num ," is prime")}
else{console.log(num,"is Not prime")}
//version one