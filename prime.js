let count =0;
function checkPrime(num){
    for(let i =2; i<num;i++){
        if(i%2==0){
            count++;
        }
        if (count>=2){
            console.log("not prime")
        }else{
            console.log("prime");
        }
    }
}
checkPrime(12);