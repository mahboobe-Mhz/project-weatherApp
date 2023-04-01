import './style.css'
import App from './src/App'


const root = document.getElementById('app')
history.pushState(null, null, '/login')

root.appendChild(App())
