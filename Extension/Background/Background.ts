console.log("[Background.ts]")

import {StoredOptionsSet } 
  from '../Storage'

chrome.runtime.onInstalled.addListener(() => {
  StoredOptionsSet({
    foo: 'bar',
  })
})
