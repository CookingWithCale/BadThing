console.log("[Popup.tsx]")
import React, { useEffect, useState } from 'react'
import { Box, Grid, InputBase, IconButton, Paper } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons' 
import { createRoot } from 'react-dom/client'
//import 'fontsource-roboto'
import "./Popup.css"
import TriggerWordCard from "../TriggerWord"
import { StoredTriggerWordsSet, StoredTriggerWordsGet, StoredOptionsSet, 
         StoredOptionsGet, LocalStorageOptions } from '../Storage'

const App: React.FC<{}> = () => {
  console.log("[Popup.tsx:App]")
  const [trigger_words, set_trigger_words] = useState<string[]>([])
  const [trigger_word_input, set_trigger_word_input] = useState<string>('')
  const [options, set_options] = useState<LocalStorageOptions | null>(null)

  useEffect(() => {
    StoredTriggerWordsGet().then(trigger_words => set_trigger_words(trigger_words))
    StoredOptionsGet().then((options) => set_options(options))
  }, [])

  console.log(trigger_word_input)

  const TriggerWordAddHandle = () => {
    if(trigger_word_input ==='') {
      return
    }
    const updated_trigger_words = [...trigger_words, trigger_word_input]
    StoredTriggerWordsSet(updated_trigger_words)
    .then(() => {
      set_trigger_words([...trigger_words, trigger_word_input])
      set_trigger_word_input('')
    })
  }

  const TriggerWordDeleteHandle = (index: number) => {
    console.log("[Popup.tsx:TriggerWordDeleteHandle")
    trigger_words.splice(index, 1)
    const updated_trigger_words = [...trigger_words]
    StoredTriggerWordsSet(updated_trigger_words).then(() => {
      set_trigger_words(updated_trigger_words)
    })
  }

  if (!options) return null

  return (
    <div>
      <h1 hidden>BadThing</h1>
      <h2>Trigger Words</h2>
      
      <Box mx='8px' my='16px'>
        <Grid container justifyContent="space-evenly">
          <Grid item>
            <Paper>
              <Box mx ='15px' my='5px'>
                <InputBase placeholder="Add a trigger_word name"
                  value={trigger_word_input}
                  onChange={(event) => set_trigger_word_input(event.target.value)} />
                <IconButton onClick={TriggerWordAddHandle}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        {trigger_words.map((trigger_word, index) => (
          <TriggerWordCard 
            trigger_word={trigger_word}
            key={index} 
            on_delete={() => TriggerWordDeleteHandle(index)} />
        ))}
        <Box height='16px' />
      </Box>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
