import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { RouterMap } from './router/routerMap'

render(<HashRouter>
   <RouterMap/>
</HashRouter>,
    document.getElementById('root')
);