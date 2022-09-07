console.log("[Background.ts]")
import { StoredTriggerWordsSet, StoredTriggerWordsGet, StoredOptionsSet, StoredOptionsGet,
  LocalStorageOptions } from '../Storage'
  
chrome.runtime.onInstalled.addListener(() => {
  StoredTriggerWordsSet([
    "republican",
    "nazi",
    "fascist",
    "fascism",
    "hitler",
    "semi-fascist",
    "full-fascist",
    "maga",
    "right-wing",
    "rightist",
    "capitalism",
    "profits",
    "extremist",
    "men",
    "man",
    "meninism",
    "democracy",
    "populist",
    "religion",
    "religious",
    "god",
    "bible",
    "manly",
    "masculine",
    "anti-woke",
    "anti-feminist",
    "anti-sjw",
    "anti-lgbtq",
    "anti-lgbt",
    "patriot",
    "patriotism",
    "patriotic",
    "anti-left",
    "competition",
    "competitive",
    "self reliance",
    "self-reliance",
    "neo-con",
    "neo-gastonism",
    "trump",
    "qanon",
    "anti-mask",
    "anti-vax",
    "anti-vaxx",
    "anti-vaxxx",
    "anti-vaxer",
    "anti-vaxxer",
    "anti-vaxxxer",
    "personal responsibility",
    "joe rogan",
    "tucker carlson",
    "trump supporters",
    "proud boys",
    "great replacement",
    "voter id",
    "ultra maga",
    "safe and secure elections",
    "voter fraud",
    "mens rights",
    "men's rights"
  ])
  StoredOptionsSet({
    foo: 'bar',
  })
})

chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({
      shows: [],
  })
  chrome.contextMenus.create({
      title: "Add trigger word",
      id: "contextMenu1",
      contexts: ["page", "selection"]
  })
  chrome.contextMenus.create({
      title: "Speak trigger word",
      id: "contextMenu2",
      contexts: ["page", "selection"]
  })
  chrome.contextMenus.onClicked.addListener((event) => {
    const trigger_word = event.selectionText
    if (trigger_word == null || trigger_word == '') return
    if (event.menuItemId === "contextMenu1") {
      StoredTriggerWordsGet().then((trigger_words) => {
        if (trigger_word == undefined || trigger_word == '') return
        StoredTriggerWordsSet([...trigger_words, trigger_word])
      })
    } else if (event.menuItemId === "contextMenu2") {
      chrome.tts.speak(trigger_word, {
        lang: "en-US",
        rate: 1,
      })
    }
  })
})

chrome.contextMenus.onClicked.addListener((event) => {
  const trigger_word = event.selectionText
  StoredTriggerWordsGet().then((trigger_words) => {
    if (trigger_word == undefined || trigger_word == '') return
    StoredTriggerWordsSet([...trigger_words, trigger_word])
  })
})
