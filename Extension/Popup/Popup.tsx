console.log("[Popup.tsx]")
import React, { useEffect, useState } from 'react'
import { Box, Grid, InputBase, IconButton, Paper } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons' 
import { createRoot } from 'react-dom/client'
//import 'fontsource-roboto'
import "./Popup.css"
import { StoredOptionsSet, StoredOptionsGet,
         LocalStorageOptions } from '../Storage'

const App: React.FC<{}> = () => {
  console.log("[Popup.tsx:App]")
  const [cities, set_cities] = useState<string[]>([])
  const [city_input, set_city_input] = useState<string>('')
  const [options, set_options] = useState<LocalStorageOptions | null>(null)

  useEffect(() => {
    StoredOptionsGet().then((options) => set_options(options))
  }, [])

  console.log(city_input)


  if (!options) return null


  return (
    <div>
      <h1>RSS Commentary</h1>
      <h2>Weather</h2>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
