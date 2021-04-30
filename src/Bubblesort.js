const mybubblesort=(array)=>{
   const result=[];
   for(let i=0;i<array.length;i++){
       for(let j=0;j<array.length-i-1;j++){
           result.push([j,j+1]);
           result.push([j,j+1]);
           if(array[j]<array[j+1]){
                  result.push([j,j]);
           }
           else{
                  
                  const temp2=array[j+1];
                  array[j+1]=array[j];
                  array[j]=temp2;
                  result.push([[j,array[j]],[j+1,array[j+1]]]);
                  
           }
       }
   }

   return result;

}
export default mybubblesort;