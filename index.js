// counter 0,1,2 number
// fontSize 16   number
// backgroundColor string

// variable I can use anywhere in this file
let state = {
    counter: 4,
    fontSize: 16,
    backgroundColor: 'red'
}

// working yay
// this function has a side effect (mutation)
function increment(){  
  state.counter++
}

// defining the function to increase
function increaseFontSize(){
    // we don't font size greate than 100
    if(state.fontSize < 100){
        // add one to fontSize
        state.fontSize++
    }
}

// defining the function to increase
function decreaseFontSize(){
    if(state.fontSize > 1){
        state.fontSize--
    }
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
      </div>    
   `
   root.append(counter)
}

// this functions renders the elements to the dom
function render(){
   renderCounter()
}

// need to call!!!
render()




