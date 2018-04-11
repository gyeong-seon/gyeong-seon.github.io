$(document).ready(function (){
    var $container = $('#container'),
        $tabList = $container.find('.tab_list'),
        $list = $tabList.find('.list'),
        $tabContent = $container.find('.tab_content'),
        $content = $tabContent.find('.content')
    
        $content.eq(0).show()
        
    
        $list.click(on)
        
        function on(){
            var index=$(this).index();
            
            $content.hide()
            $content.eq(index).fadeIn()
            $(this).addClass('on'); 
        }
})