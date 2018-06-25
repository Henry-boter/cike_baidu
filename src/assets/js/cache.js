import storage from 'good-storage'

export function saveData (phone, query) {
  let phoneNumber = storage.get(phone, '')
  if (phoneNumber) {
    console.log('已经存在电话号码了：' + phoneNumber)
  } else {
    storage.set(phone, query)
    console.log('电话号码储存成功！')
  }
}
