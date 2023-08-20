function setCircleValue(circleName){return(event)=>{var value=parseInt(event.target.value);
var circleElement=document.querySelector('#'+circleName);
    knownVariables[circleName]=value;circleElement.innerHTML='<span>'+value+'</span>';}}
var wInput=document.querySelector('#wInput');var xInput=document.querySelector('#xInput');
var yInput=document.querySelector('#yInput');var zInput=document.querySelector('#zInput');
    wInput.addEventListener('change',setCircleValue('w'));
    xInput.addEventListener('change',setCircleValue('x'));
    yInput.addEventListener('change',setCircleValue('y'));
    zInput.addEventListener('change',setCircleValue('z'));
var mInput=document.querySelector('#mInput');
var nInput=document.querySelector('#nInput');
var oInput=document.querySelector('#oInput');
    mInput.addEventListener('change',setCircleValue('m'));
    nInput.addEventListener('change',setCircleValue('n'));
    oInput.addEventListener('change',setCircleValue('o'));
var knownVariables={w:11,x:16,y:18,z:26,m:19,n:14,o:12,};
var sums={w:['a','b','d','e'],x:['b','c','e','f'],y:['d','e','g','h'],z:['e','f','h','i'],m:[],n:[],o:[],};
var positionVariables={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,};
function sumOptions(array){var sum=0;for(var i=0;i<array.length;i++){sum+=positionVariables[array[i]];}
return sum;}
function verifySum(array,expectedValue){return sumOptions(array)===expectedValue;}
function verifySums(key){return verifySum(sums[key],knownVariables[key]);}
function verifyPuzzle(){var sumsValidArray=Object.keys(sums).map((key)=>{return verifySums(key);});return sumsValidArray.every((item)=>item===true);}
function permutator(inputArr){var result=[];
function permute(arr,m=[]){if(arr.length===0){result.push(m)}else{for(var i=0;i<arr.length;i++){var curr=arr.slice();
var next=curr.splice(i,1);
permute(curr.slice(),m.concat(next))}}}
permute(inputArr)
return result;}
function solve(){var foundResult=false;var loops=0;var allOptions=permutator([1,2,3,4,5,6,7,8,9]);
for(var i=0;i<allOptions.length;i++){if(!foundResult){var currentOptions=allOptions[i];
  positionVariables['a']=currentOptions[0];positionVariables['b']=currentOptions[1];
  positionVariables['c']=currentOptions[2];positionVariables['d']=currentOptions[3];
  positionVariables['e']=currentOptions[4];positionVariables['f']=currentOptions[5];
  positionVariables['g']=currentOptions[6];positionVariables['h']=currentOptions[7];
  positionVariables['i']=currentOptions[8];foundResult=verifyPuzzle();}
loops++;}
if(!foundResult){console.log('Cannot solve! invalid input/data!');}else{Object.keys(positionVariables).forEach((key)=>{console.log(key);
var element=document.querySelector(`#${key}`);
    element.innerHTML=positionVariables[key];console.log(element);});
    console.log('Solved successfully!');}}
var solveButton=document.querySelector('#solve');
    solveButton.addEventListener('click',solve);
var mCircle=document.querySelector('#mOption');
var nCircle=document.querySelector('#nOption');
var oCircle=document.querySelector('#oOption');
var currentCircle=null;
document.querySelectorAll('td').forEach((element)=>{element.addEventListener('click',(event)=>{if(currentCircle===null){return;}
var cell=event.target;var selectedSquare=cell.id;if(currentCircle==='m'){sums['m'].push(selectedSquare);
cell.style.backgroundColor='RGB(255,234,0)';sums['n']=sums['n'].filter(item=>item!==selectedSquare);
  sums['o']=sums['o'].filter(item=>item!==selectedSquare);}else if(currentCircle==='n'){sums['n'].push(selectedSquare);
cell.style.backgroundColor='orange';sums['m']=sums['m'].filter(item=>item!==selectedSquare);
  sums['o']=sums['o'].filter(item=>item!==selectedSquare);}else if(currentCircle==='o'){sums['o'].push(selectedSquare);
cell.style.backgroundColor='RGB(136,201,125)';sums['n']=sums['n'].filter(item=>item!==selectedSquare);
  sums['m']=sums['m'].filter(item=>item!==selectedSquare);}});});
mCircle.addEventListener('click',(event)=>{currentCircle='m';});
nCircle.addEventListener('click',(event)=>{currentCircle='n';});
oCircle.addEventListener('click',(event)=>{currentCircle='o';});
