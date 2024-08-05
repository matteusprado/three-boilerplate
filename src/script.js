
import Experience from './Experience/Experience.js'

const experience = new Experience(document.querySelector('canvas.webgl'))

window.addEventListener('keydown', (event) =>{
  console.log('event', event.key)
  if(event.key === 'w') {
    // move the fox
    experience.fox.move('walking')
  }
})