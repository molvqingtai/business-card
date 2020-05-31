class LocalStorage {
  static key (index) {
    return localStorage.key(index)
  }

  static getItem (key) {
    return JSON.parse(localStorage.getItem(key))
  }

  static setItem (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static removeItem (key) {
    localStorage.removeItem(key)
  }

  static clear () {
    localStorage.clear()
  }
}

export default LocalStorage
