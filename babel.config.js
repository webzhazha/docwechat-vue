
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset",...plugins],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
