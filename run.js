var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});
hexo.init()
  .then(function(){
    return hexo.call('clean', {})
  })
  .then(function(){
    return hexo.call('generate', {})
  })
  .then(function(){
    return hexo.call('server', {})
  })
  .then(function(){
    console.log('running')
  });
