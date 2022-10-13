// counter 0,1,2 number
// fontSize 16   number
// backgroundColor string

let state = {
    counter: 0,
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




