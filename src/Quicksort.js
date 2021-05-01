
let animations=[];
let count=0;
function QS(array){
    animations=[];
    
    MyQuicksort(array,0,array.length-1);
   

    
    return animations;
}
function MyQuicksort(temp,low,high){
    
    if (low < high) 
    { 
        
        const pi = partition(temp, low, high); 
        
        
     
        MyQuicksort(temp, low, pi - 1); 
        MyQuicksort(temp, pi + 1, high); 
    } 
    else{
        return;
    }
    
}

function partition(a,low,high){
    let pivot = a[high]; 
    animations.push(["pivot",high]);
    
    count++;
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) 
    { 
        
        if (a[j] < pivot) 
        { 
            i++;
            const h1=a[i];
            const h2=a[j];
            
            animations.push(["swap",[[i,h2],[j,h1]]]);
            //console.log(i,h2,j,h1);
            
            
        
            a[j]=h1;
            a[i]=h2;
             
        } 
    } 
    const height1=a[i+1];
    const height2=a[high];
     
    animations.push(["swap",[[i+1,height2],[high,height1]]]);
    //console.log(i+1,height2,high,height1);
    a[i+1]=height2;
    a[high]=height1;
    
    return (i + 1); 
}
export default QS;