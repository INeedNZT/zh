let removeRedundantStr = (str) => {
  // remove something you dislike, exclude them from the str
  return str;
}

hexo.extend.filter.register('after_render:html', (str, data) => {
  // console.log(data)
  return removeRedundantStr(str);
})
