import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from '../App'


function WrappedApp() {
  return (
  //  <HashRouter>
  //   <App/>
  //  </HashRouter>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  )
}

export default WrappedApp
