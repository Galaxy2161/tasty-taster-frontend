import {createRoot} from 'react-dom/client'
import App from './App'
import createStore from './redux/store/store'
import { Provider } from 'react-redux'

const store = createStore()

createRoot(document.getElementById('root')).render(<Provider store={store}><App/></Provider>)