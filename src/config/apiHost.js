const gate = '//wechatgate.91160.com'

let knowledge = ''
let commerce = ''
let cube = ''
let statistics = ''
let comments = ''
let userAct = ''
let doctorBus = ''
let guaHao = ''

if (process.env.NODE_ENV == 'development') {
  cube = '/cube-data'
  comments = gate + '/comments'
  commerce = gate + '/commerce'
  knowledge = gate + '/knowledge'
  statistics = gate + '/advert-stat'
  userAct = gate + '/user-activities'
  doctorBus = gate + '/doctor-business'
  guaHao = gate + '/guahao'
}

if (process.env.NODE_ENV == 'test') {
  cube = gate + '/cube-data'
  comments = gate + '/comments'
  commerce = gate + '/commerce'
  knowledge = gate + '/knowledge'
  statistics = gate + '/advert-stat'
  userAct = gate + '/user-activities'
  doctorBus = gate + '/doctor-business'
  guaHao = gate + '/guahao'
}

if (process.env.NODE_ENV == 'production') {
  cube = gate + '/cube-data'
  comments = gate + '/comments'
  commerce = gate + '/commerce'
  knowledge = gate + '/knowledge'
  statistics = gate + '/advert-stat'
  userAct = gate + '/user-activities'
  doctorBus = gate + '/doctor-business'
  guaHao = gate + '/guahao'
}

export default {
  gate,
  cube,
  comments,
  commerce,
  knowledge,
  statistics,
  userAct,
  doctorBus,
  guaHao
}
