var num = prompt("Введите X: ");


function isPrime(num){
    const seive =[];
     const primes = [];
   
   for (let i=2; i <= num; i++) {
     if (!seive[i]) {
       primes.push(i);
       for (let j=i*2; j<=num; j+=i) {
         seive[j] = true;
       }
     } 
   }
   return primes.length;
  }
   console.log(isPrime(num));