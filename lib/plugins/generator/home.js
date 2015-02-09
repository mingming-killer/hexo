var paginator = require('./paginator');

module.exports = function(locals, render, callback){
  //var posts = locals.posts.sort('date', -1);
  var posts = locals.posts.sort(hexo.config.sort_by, -1);
  paginator('', posts, 'index', render);
  callback();
};
