function fizzBuzz() {  
    // Your code here
    for(var i=1;i<101;i++){
        var a= i;
        if ((a%3==0 && a%5==0)){
                console.log('FizzBuzz');
        }
        else{
            if(a%5==0){
                console.log('Buzz');
            }
            else{
                if(a%3==0){
                   console.log('Fizz'); 
                }
                else{
                    console.log(i);
                }
            }
        }
    }
}

fizzBuzz();