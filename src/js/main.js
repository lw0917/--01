require.config({
    baseUrl:'./js/',
    paths:{
        flex:'./libs/flexible',
        jquery:'./libs/jquery',
        index:'./app/index'
      
    }
    
})
require(['flex','jquery','index'],function(flex,$){
     console.log($)
})