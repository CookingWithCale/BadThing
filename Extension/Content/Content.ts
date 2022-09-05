import { StoredTriggerWordsSet, StoredTriggerWordsGet, StoredOptionsSet, StoredOptionsGet,
  LocalStorageOptions } from '../Storage'

chrome.runtime.sendMessage('[Content.ts]', (response) => {
  console.log(response)
})

const ReplaceTriggerWords = () => {
  
}

//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("user1", "g"), "nobody");