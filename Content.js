console.log("[Content.js]")

import { StoredTriggerWordsGet } from '../Storage'

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, captions, span, a')

StoredTriggerWordsGet().then((trigger_words) => {
  console.log("Are you triggered?")
  trigger_words.forEach((trigger_word, index, arr) => {
    if (trigger_word == undefined) return
    for(let i=0; i < text.length; i++) {
      if (text[i].innerHTML.includes(trigger_word)) {
        console.log("Found #trigger word:" + trigger_word)
        text[i].innerHTML = text[i].innerHTML.replace(trigger_word, 'bad thing')
      }
    }
  })
})
 