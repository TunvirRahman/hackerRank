function fibonacciModified(t1, t2, n) {

    const series = [t1,t2];
    for(let i=2;i<n;i++){
        series[i]= series[i-2] + Math.pow(series[i-1],2); 
    }
    return series[n-1].toFixed(100)
}

console.log(fibonacciModified(0,1,19))