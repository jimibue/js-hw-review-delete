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
// whenever we change our state we need
  // to call our render
  render()
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

function setBackgroundColor(){
    // in the futre wee need chck if it color
  root.style.backgroundColor = state.backgroundColor
}

function handleColorChange(event){
   // do not reload the page, default behavoir of form
   event.preventDefault()
   const colorInputElement = document.querySelector('#colorValue')
   changeBackground(colorInputElement.value)

   // you can use this, try with form
   // const color = prompt('what color would')
   // changeBackground(color)

}

function renderBackgroundColorForm(){
    const backgroundForm = document.createElement('div')
    backgroundForm.innerHTML = `
      <form id='backgroundForm'>
        <label> color</label>
        <input id='colorValue'/>
        <button type='submit'>change color</button>
      </form>
    `
    backgroundForm.addEventListener('submit', handleColorChange)
    root.append(backgroundForm)


   
}

// this functions renders the elements to the dom
function render(){
    // delete all root innerHTML / clearit
   root.innerHTML = '' 

   // rerender it agian
   setBackgroundColor()
   renderCounter()
   renderFontSize()
   renderBackgroundColorForm()
}

// need to call!!!
render()

// it works
// it works
// readiablity
// effieciency
