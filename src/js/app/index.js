define(['jquery'], function($) {
   
        $('.list').on('click',function(){
           location.href='page/page.html?id='+$(this).data('id');
       })
    
       
});