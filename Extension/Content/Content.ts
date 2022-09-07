console.log("[Content.ts]")
import { StoredTriggerWordsGet } from '../Storage'

chrome.runtime.sendMessage('[Content.ts]', (response) => {
  console.log(response)
})

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, captions, span, a')

const trigger_word_example: string = "the"
const trigger_word_replacement_example = 'racist'

StoredTriggerWordsGet().then((trigger_words) => {
  trigger_words.forEach((trigger_word, index, arr) => {
    if (trigger_word == undefined) return
    for(let i=0; i < text.length; i++) {
      if (text[i].innerHTML.toLowerCase().includes(trigger_word)) {
        const inner_text = text[i].innerHTML
        var searchMask = "is";
        const regEx = new RegExp(trigger_word, "ig");
        text[i].innerHTML = inner_text.replace(regEx, 'bad thing');
      }
    }
  })
})
