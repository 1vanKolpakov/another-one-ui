import React from 'react'

import reactDom, { Container, render } from 'react-dom'
import App from './app/App'
import { createRoot } from 'react-dom/client'


const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)


root.render(
    <React.StrictMode>
        <App />

    </React.StrictMode>
)