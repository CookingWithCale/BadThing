
export interface LocalStorageOptions {
  foo: string
}

export interface LocalStorage {
  trigger_words?: string[]
  options?: LocalStorageOptions
}

export type LocalStorageKeys = keyof LocalStorage


export function StoredOptionsSet(options: LocalStorageOptions): Promise<void> {
  const vals: LocalStorage = {
    options,
  }
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve()
    })
  })
}

export function StoredOptionsGet(): Promise<LocalStorageOptions> {
  const keys: LocalStorageKeys[] = ['options']
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (resources: LocalStorage) => {
      //console.log('[Storage.tx:StoredOptionsGet]\nres.options: ' + 
      //            res.options.units_temperature)
      let local_storage_options = resources.options
      if (local_storage_options == undefined)
        local_storage_options = { foo:''}
      resolve(local_storage_options)
    })
  })
}
