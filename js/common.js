$(document).ready(function(){
    var $header = $('#header'),
        $headerCon = $header.find('.header_con'),
        $gnbBtn = $headerCon.find('.gnb_btn'),
        $gnbBar = $headerCon.find('.gnb_bar'),
        $gnbMenu = $gnbBar.find('.gnb_menu'),
        $sMenu = $gnbMenu.find('.smenu'),
        $hamMenu = $headerCon.find('.ham_menu')
    
        $gnbBtn.click(slide)
        
        function slide(){
            $hamMenu.slideToggle()
            $sMenu.hide()
            $(this).toggleClass('x')
        }
})

