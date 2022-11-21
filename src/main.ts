import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

//random chance 20%
if (Math.random() > 0.9) {
  window.location.href = 'https://twitter.com/elonmusk'
}

export default app
