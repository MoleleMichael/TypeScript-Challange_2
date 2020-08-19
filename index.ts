// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//TypeScript Challange 2
function convert(hours:number, minutes:number){
 
 let seconds = ((hours*3600) + (minutes*60));
 return seconds;
}

let sum = convert(2,0);
console.log(sum);