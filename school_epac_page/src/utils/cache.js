class LocalCache {
  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  get(key) {
    const value = window.localStorage.getItem(key)
    if(value) {
      return JSON.parse(value)
    }
  }
  del(key) {
    window.localStorage.removeItem(key)
  }
  clear() {
    window.localStorage.clear()
  }
}

export default new LocalCache()