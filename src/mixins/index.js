

const protocol = document.location.protocol
export const buildImage = {
  data(){
    return {
      STATICDOMAIN: `${protocol}//wximg.91160.com`,
      IMAGESDOMAIN: `${protocol}//images.91160.com/`,
    }
  },
  methods: {
    fixImageUrl(url) {
      const RegExps = {
        // 判断是否为线上图片正则
        // https://regexper.com/?#%2F%28%28http%7Chttps%29%3A%29%3F%5C%2F%5C%2F%28%5B%5Cw.%5D%2B%5C%2F%3F%29%5CS*%2Fg
        online: /((http|https):)?\/\/([\w.]+\/?)\S*/g,
        // 静态站图片
        static: /\/\/static./g,
        // 本地图片带有版本号，带有 img 路径
        // https://regexper.com/?#%2F%5C%2Fsrc%5C%2Fimg%5C%2F%28.*%29%2B%5C.%28.*%29%2B%5C.%28jpe%3Fg%7Cpng%7Cgif%29%2Fgim
        local: /\/src\/img\/(.*)+\.(.*)+\.(jpe?g|png|gif)/gim,
        // data-uri 图片
        base64: /data:image\/.*;base64,/g
      }
      if (Object.keys(RegExps).some(item => RegExps[item].test(url))) {
        return url
      }
      return this.STATICDOMAIN + url
    },
    buildImageCss(path, type) {
      if (type == 2) {
        return `background-image: url('${this.fixImageUrl(path)}')`
      }
      return this.fixImageUrl(path)
    },
    generateImageUrl(path, defaultPath = '', type = 2) {
      if (!path) return this.buildImageCss(defaultPath, type)
      if (type == 2) {
        if (defaultPath) {
          return `background-image: ${this.buildUrlString(path, type)}, ${this.buildUrlString(defaultPath, type)}`
        }
        return `background-image: ${this.buildUrlString(path, type)}`
      }
      return this.fixImageUrl(path)
    },
    buildUrlString(path, type) {
      if (type == 2) {
        return `url('${this.fixImageUrl(path)}')`
      }
      return this.fixImageUrl(path)
    },
    createCssUrl(path, defaultPath) {
      if (!path) return this.buildUrlString(defaultPath, 2)
      return this.buildUrlString(path, 2)
    }
  }
}