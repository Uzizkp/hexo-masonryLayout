

hexo.extend.tag.register('masonryLayout', function (args, content) {
  console.log(content);
  return `
    <link rel="stylesheet" href="https://img-1253324855.cos.ap-chengdu.myqcloud.com/css/things.css">
    <link rel="stylesheet" href="https://img-1253324855.cos.ap-chengdu.myqcloud.com/js/sortable.min.css">
    <script type="text/javascript" src="https://img-1253324855.cos.ap-chengdu.myqcloud.com/js/sortable.js"></script> 
    <div class="container">
      <div class="wrapper">
        <ul id="sortable__nav" class="sortable__nav nav">
          <li id='sortable__all'> <a data-sjslink='all' class='nav__link' > 🌿</a> </li>
        </ul>
        <div id="sortable" class="sjs-default">
          <div id="test_thing"></div>
        </div>
      </div>
    </div>
    <script type="text/javascript">
      var nav = document.getElementById("sortable__all");
      var test_thing = document.getElementById("test_thing");
      var things = ${content};
      var thing;
      for(thing of things){
        test_thing.insertAdjacentHTML("beforebegin", "<div id='test_things' data-sjsel="+thing[0]+"><div class='card'> <img class='card__picture' src=\'"+thing[1]+"\' alt=''><div class='card-infos'><h2 class='card__title'>"+thing[2]+"</h2><p class='card__text'>"+thing[3]+"</p></div></div></div>");
      }
      var tags = ${args};
      var tag;
      for (tag of tags){
        nav.insertAdjacentHTML("afterend", "<li> <a data-sjslink=\'"+ tag+"\' class='nav__link' >"+tag+"</a> </li>");
      }
      document.querySelector('#sortable').sortablejs()
    </script>
    `

  // ends为true的话标签是这样的
  // {%tag arg0 arg1 arg2%} content {%endtag%}
  // false的话是这样
  // {%tag%}
  // 回调函数的 args参数是[arg0, arg1, arg2 ...] 组成的数组
  //          content是夹在标签之间的内容
}, {
  ends: true
})