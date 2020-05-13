const docIndex = () => import('@/views/docDiagnoses/index.vue')
const diagnosesData = () => import('@/views/docDiagnoses/diagnosesData.vue')
const collectIndex = () => import('@/views/docDiagnoses/collectIndex.vue')
const searchIndex = () => import('@/views/docDiagnoses/searchIndex.vue')
export default [
  { path: '/', redirect: 'docDiagnoses/index' },
  { path: '/docDiagnoses/index', name: 'docIndex', component: docIndex },
  { path: '/docDiagnoses/diagnosesData', name: 'diagnosesData', component: diagnosesData },
  { path: '/docDiagnoses/collectIndex', name: 'collectIndex', component: collectIndex },
  { path: '/docDiagnoses/searchIndex', name: 'searchIndex', component: searchIndex }
]
