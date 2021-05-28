import React, { useState } from 'react';
import {getMergeSortAnimations} from './sortingAlgorithm.js';
import './cardstyle.css';
import mybubblesort from './Bubblesort.js';
import heapsort from './MyHeapsort.js';
import MyQuicksort from './Quicksort';
import Slider from './Slider';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 50;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'rgba(255, 255, 255, 0.25)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
const WIDTH=14;
let sorting_already_running=0;


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      array: [],
      speed:ANIMATION_SPEED_MS,
      bar:NUMBER_OF_ARRAY_BARS,
      mywidth:WIDTH,
      
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i <this.state.bar; i++) {
      array.push(randomIntFromInterval(5, 530));
    }
    this.setState({array});
  }

  mergeSort() {
      if(sorting_already_running===0){
      sorting_already_running=1;

      
    const animations = getMergeSortAnimations(this.state.array);
    
    for (let i = 0; i < animations.length; i++) {
    
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        
        
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i*this.state.speed);
      } else {
        setTimeout(() => {
          
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i*this.state.speed);
      }
    }
    setTimeout(()=>{
             console.log("timed out");
             sorting_already_running=0;
    },animations.length*this.state.speed);
  
   }
   else{
     alert("Sorting already running.You can't run another algorithm when one algorithm is running");
   }


}


  quickSort() {
  
    
    const animations=MyQuicksort(this.state.array);
     if(sorting_already_running===0){
      sorting_already_running=1;
      let timer=0;
    
    for (let i = 0; i < animations.length; i++) {
      
      const arrayBars = document.getElementsByClassName('array-bar');
      
      
      

          
      if(animations[i][0]=='pivot'){
        const pivotbar=animations[i][1];
        const barOneStyle = arrayBars[pivotbar].style;
        
        setTimeout(()=>{
          barOneStyle.backgroundColor="green";
          
        },timer*this.state.speed);
        timer++;
        
        setTimeout(()=>{
          barOneStyle.backgroundColor=PRIMARY_COLOR;
        },timer*this.state.speed);
        timer++;
        
      }
      if(animations[i][0]=="swap"){
         const [[barone,height1],[bartwo,height2]]=animations[i][1];
         if(barone==bartwo){
           const barOneStyle = arrayBars[barone].style;  
           setTimeout(()=>{
            barOneStyle.backgroundColor="red";
            
          },timer*this.state.speed);
          timer++;
          setTimeout(()=>{
            barOneStyle.backgroundColor=PRIMARY_COLOR;
          
          },timer*this.state.speed);
          timer++;
         }
         else{
         const barOneStyle = arrayBars[barone].style;
         const barTwoStyle = arrayBars[bartwo].style;
         setTimeout(()=>{
           barOneStyle.backgroundColor="red";
           barTwoStyle.backgroundColor="red";
         },timer*this.state.speed);
         timer++;
         
         setTimeout(()=>{
           barOneStyle.backgroundColor=PRIMARY_COLOR;
           barTwoStyle.backgroundColor=PRIMARY_COLOR;
         },timer*this.state.speed);
         timer++;
         
         setTimeout(()=>{
          
            barOneStyle.height=`${height1}px`;
            barTwoStyle.height=`${height2}px`;
          
            
         },timer*this.state.speed);
         timer++;
         
         
         

      }
      
    }
    
  }
  setTimeout(()=>{
    sorting_already_running=0;
    console.log("done");
},timer*this.state.speed);
      
      
      
    
  }
  else{
    alert("Sorting already running.You can't run another algorithm when one algorithm is running");
  }

  const arrayBars = document.getElementsByClassName('array-bar');


  
}

  heapSort() {
    console.log(this.state.array);
    const animations=heapsort(this.state.array);
    console.log(this.state.array);
    let timer=0;
    if(sorting_already_running===0){
      sorting_already_running=1;
    for(let i=0;i<animations.length;i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      const [[barone,height1],[bartwo,height2]]=animations[i][1];
      const barOneStyle = arrayBars[barone].style;
         const barTwoStyle = arrayBars[bartwo].style;
         setTimeout(()=>{
           barOneStyle.backgroundColor="red";
           barTwoStyle.backgroundColor="red";
         },timer*this.state.speed);
         timer++;
         
         setTimeout(()=>{
           barOneStyle.backgroundColor=PRIMARY_COLOR;
           barTwoStyle.backgroundColor=PRIMARY_COLOR;
         },timer*this.state.speed);
         timer++;
         
         setTimeout(()=>{
          
            barOneStyle.height=`${height1}px`;
            barTwoStyle.height=`${height2}px`;
          
            
         },timer*this.state.speed);
         timer++;

    }
    setTimeout(()=>{
          sorting_already_running=0;
    },timer*this.state.speed);
  }
  else{
    alert("Sorting already running.You can't run another algorithm when one algorithm is running");
  }

         
  }

  bubbleSort() {
    const animations=mybubblesort(this.state.array);
    if(sorting_already_running===0){
      sorting_already_running=1;
    
    for (let i = 0; i < animations.length; i++) {
    
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        
        
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i*this.state.speed);
      } else {
        
         if(animations[i][0]!==animations[i][1]){
              
              
              setTimeout(() => {
                const [[bar1,height1],[bar2,height2]]=animations[i];
                  
              
                
                
                
                const barOneStyle=arrayBars[bar1].style;
                const barTwoStyle=arrayBars[bar2].style;
                
                barOneStyle.height=`${height1}px`;
                
                
                barTwoStyle.height=`${height2}px`;
                
                
              }, i*this.state.speed);

 

         }         
 

      
      }
  }
  setTimeout(()=>{
      sorting_already_running=0;
  },animations.length*this.state.speed);
}
else{
  alert("Sorting already running.You can't run another algorithm when one algorithm is running");
}

           
  }
  

  changespeed(){
     if(sorting_already_running===0){
      const cs=document.getElementById("s1").value;
      
      this.state.speed=101-cs;
     }
     else{
      alert("you can't change array size when another algorithm is running");
       
     }
  }
  changeNumberofarray(){
    if(sorting_already_running===0){
    const new_array_size=document.getElementById("nob1").value;
    this.state.bar=new_array_size;
    const n_width=Math.round(25-(19/90)*(new_array_size-10));
    this.state.mywidth=n_width;
    const array = [];
    for (let i = 0; i <this.state.bar; i++) {
      array.push(randomIntFromInterval(5, 530));
    }

    this.setState({array});}
    else{
      alert("you can't change array size when another algorithm is running");
    }
    
    
  }
  
  
  
  render() {
    const {array} = this.state;
    
     
    

    return (
      <div className="main">
        
         <div className="buttons">
           
         <div className="margin-left">
         <h1>sorting speed</h1>  
         <input type="range" id="s1" name="points" min="10" max="100" onChange={()=>this.changespeed()}/>
         </div>
         
         
         <div className="margin-left">
           <h1>number of bars</h1>
         <input type="range" id="nob1" name="points" min="10" max="100" onChange={()=>this.changeNumberofarray()}/>
         </div>
         </div>
         
        
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              borderRadius:"10px",
              boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              height: `${value}px`,
              width:`${this.state.mywidth}px`,
              
            }}></div>
        ))}
        </div>
        <div className="buttons">
        
        
        
        
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        
        
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        
        </div>
        
        
      
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

