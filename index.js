// counter 0,1,2 number
// fontSize 16   number
// backgroundColor string

// variable I can use anywhere in this file
let state = {
    counter: 0,
    fontSize: 16,
    backgroundColor: 'grey'
}

// working yay
// this function has a side effect (mutation)
function increment(){  
  state.counter++
  // whenever we change our state we need
  // to call our render
  render()
}

// defining the function to increase
function increaseFontSize(){
    // we don't font size greate than 100
    if(state.fontSize < 100){
        // add one to fontSize
        state.fontSize++
    }
    // whenever we change our state we need
  // to call our render
  render()
}

// defining the function to increase
function decreaseFontSize(){
    if(state.fontSize > 1){
        state.fontSize--
    }
 // whenever we change our state we need
  // to call our render
  render()
}

// this function I am expect to get a color which should be a string
function changeBackground(color){
   state.backgroundColor = color
}

// want to take my state and => html make it look nice, add buttons
// forms so user can use it
console.log('Working')

//  visible to all of this file
const root = document.querySelector('#root')

// this function does the html stuff for
// the counter feature
function renderCounter(){
   const counter = document.createElement('div')
   counter.innerHTML=`
      <div>
          <h1>Counter ${state.counter}</h1>
          <button onclick='increment()'>add</button>
      </div>    
   `
   root.append(counter)
}

function renderFontSize(){
    const fontSize = document.createElement('div')
    fontSize.innerHTML=`
       <div>
           <h1 style='font-size:${state.fontSize}px'>FontSize: ${state.fontSize}</h1>
           <button onclick='increaseFontSize()'>increase</button>
           <button onclick='decreaseFontSize()'>decrease</button>
           </div>    
    `
    root.append(fontSize) 
}

function setBackGroundColor(){
    // in the futre wee need chck if it color
  root.style.backgroundColor = state.backgroundColor
}

// this functions renders the elements to the dom
function render(){
    // delete all root innerHTML / clearit
   root.innerHTML = '' 

   // rerender it agian
   setBackGroundColor()
   renderCounter()
   renderFontSize()
}

// need to call!!!
render()
