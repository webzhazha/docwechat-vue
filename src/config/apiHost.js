const gate = '//wechatgate.91160.com'

let cube = ''
let doctorBus = ''

if (process.env.NODE_ENV == 'development') {
  cube = '/cube-data'
  doctorBus = '/doctor_business'
}

if (process.env.NODE_ENV == 'test') {
  cube = gate + '/cube-data'
  doctorBus = gate + '/doctor_business'
}

if (process.env.NODE_ENV == 'production') {
  cube = gate + '/cube-data'
  doctorBus = gate + '/doctor_business'
}

export {
  gate,
  cube,
  doctorBus
}
