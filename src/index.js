/*
 * ======================================================================================
 *  1.- Import React and createRoot from react-dom/client
 *  2-  Create App.js and export as default
 *  3-  Render your App component with ReactDom.render(@App, @DOMelement in index.html)
 *  4-  Import your styles
 * ======================================================================================
 */

//Default packages from react
import React from 'react'
//? import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

//import App component
import App from './App'
//import defalt stylesheet
import './index.css'

/*
?============================================
? OLD WAY with import ReactDOM from 'react-dom'
?============================================
*/

//? ReactDOM.render(
//?   <React.StrictMode>
//?     <App />
//?   </React.StrictMode>,
//?   document.getElementById('root')
//? )

/*
?==========================================================
? NEW WAY with import {createRoot} from 'react-dom/client'
?==========================================================
*/

const container = document.getElementById('root'),
  root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
