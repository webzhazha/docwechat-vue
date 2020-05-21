import Vue from 'vue'

// 初始化自定义指令 页面头部
Vue.directive('title', (el, binding) => {
  if (el.dataset.title) {
    document.title = el.dataset.title
  }
})

//拖拽
Vue.directive('drag', (el, binding) => {
  const elWidth = Number(el.dataset.width) || 66
  const elHeight = Number(el.dataset.height) || 100
  let l = ''
  const oDiv = el // 当前元素
  const windowWidth = document.body.clientWidth || document.documentElement.clientWidth
  const windowHeight = document.body.clientHeight || document.documentElement.clientHeight
  const ratio = windowWidth / 375
  const rightDis = windowWidth - (15 + elWidth) * ratio
  oDiv.addEventListener('touchstart', function(e) {
    const f = e.touches[0]
    // 鼠标按下，计算当前元素距离可视区的距离
    const disX = f.clientX - oDiv.offsetLeft
    const disY = f.clientY - oDiv.offsetTop

    function move(e) {
      e.preventDefault()
      const f = e.touches[0]
      // 通过事件委托，计算移动的距离
      l = f.clientX - disX
      let t = f.clientY - disY
      if (l <= 15 * ratio) { // 左边界
        l = 15 * ratio
      } else if (l >= rightDis) { // 右边界
        l = rightDis
      }
      if (t <= 40) { // 上边界
        t = 40
      } else if (t >= windowHeight - elHeight * ratio) { // 下边界
        t = windowHeight - elHeight * ratio
      }
      // 移动当前元素
      oDiv.style.left = l + 'px'
      oDiv.style.top = t + 'px'
      // 将此时的位置传出去
      binding.value({
        x: f.pageX,
        y: f.pageY
      })
    }
    document.addEventListener('touchmove', move)
    document.addEventListener('touchend', function(e) {
      binding.value('end')
      if (l && l <= (windowWidth / 2 - (15 + elWidth / 2) * ratio)) { // 如果没有移动,l为''
        oDiv.style.left = 15 * ratio + 'px'
      } else {
        oDiv.style.left = (windowWidth - (15 + elWidth) * ratio) + 'px'
      }
      document.removeEventListener('touchmove', move) // 解绑事件,防止页面滚动的时候广告一起滚
      document.ontouchend = null
    })
  })
  oDiv.addEventListener('touchstart', function(e) {
    e.preventDefault()
  })
})

