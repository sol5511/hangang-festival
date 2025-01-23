$(function(){
    $('.tabnav li').click(function(){
        $('.tabnav li').removeClass('on')
            $(this).addClass('on')
            $('.map').hide()

        let idx = $(this).index()
        $('.map').hide()
        $('.map').eq(idx).show()
    })
    $('.tabnav li').eq(0).trigger('click')

    //gotop
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop : 0
        },1000)

         $(window).scroll(function(){
         if($(window).scrollTop()>=1700){
             $('.gotop').show()
         }else{
             $('.gotop').hide()
         }
         console.log($(window).scrollTop())
     })
    })
    
        //sub2 날짜선택
    $('table tr td').click(function(){
        $('table tr td').removeClass('on')
            $(this).addClass('on')
            $(td).hide()
    })

})

