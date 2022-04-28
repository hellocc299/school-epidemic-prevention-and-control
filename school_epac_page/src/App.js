import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from '@/router'
import store from '@/store'
import { HashRouter, Route} from 'react-router-dom'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        { renderRoutes(routes) }
      </HashRouter>
    </Provider>
  )
})

export default App
