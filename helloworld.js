const greeting = 'hellow world'

function display(str) {
  if (str) {
    console.log(str)
  } else {
    console.log(greeting)
  }
}

display()
display('abc')

export {greeting}
export default display