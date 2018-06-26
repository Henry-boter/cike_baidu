import storage from 'good-storage'

export function saveData (param, query) {
  let phoneNumber = storage.get(param, '')
  if (phoneNumber) {
    console.log('已经存在此参数的值：' + phoneNumber)
  } else {
    storage.set(param, query)
    console.log('储存成功！')
  }
}

export function getData (param) {
  let phoneNumber = storage.get(param, '')
  if (phoneNumber) {
    return phoneNumber
  } else {
    return false
  }
}
