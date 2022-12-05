$(document).ready(function(){
    ho_tag()
    ho_arrow()
    ho_case()

    function ho_tag(){
        $('.Interior_img0').hover(function(){
            $('.Interior_btn').css({
                opacity:'1'
            })
        })
        $('.Interior_img0').mouseleave(function(){
            $('.Interior_btn').css({
                opacity:'0'
            })
        })

        $('#btn1').hover(function(){
            $('#btn1').css({opacity:'1'})
            $('#arrow1').css({display:'block'})
        })
        $('#btn2').hover(function(){
            $('#btn2').css({opacity:'1'})
            $('#arrow2').css({display:'block'})
        })
        $('#btn3').hover(function(){
            $('#btn3').css({opacity:'1'})
            $('#arrow3').css({display:'block'})
        })
        $('#btn4').hover(function(){
            $('#btn4').css({opacity:'1'})
            $('#arrow4').css({display:'block'})
        })
        $('#btn5').hover(function(){
            $('#btn5').css({opacity:'1'})
            $('#arrow5').css({display:'block'})
        })



    }

    function ho_arrow(){

        $('.Interior_btn').mouseleave(function(){
                $('#arrow1').css({
                    display:'none'
                })
                $('#arrow2').css({
                    display:'none'
                })
                $('#arrow3').css({
                    display:'none'
                })
                $('#arrow4').css({
                    display:'none'
                })
                $('#arrow5').css({
                    display:'none'
                })

            }
        )}

    function ho_case(){
        $('#Interior_box1').hover(function (){

            $('#btn1').css({
                opacity:'1'
            })
            $('#arrow1').css({
                display:'block'
            })
        })
        $('#Interior_box1').mouseleave(function (){

            $('#btn1').css({
                opacity:'0'
            })
            $('#arrow1').css({
                display:'none'
            })
        })

        $('#Interior_box2').hover(function (){

            $('#btn2').css({
                opacity:'1'
            })
            $('#arrow2').css({
                display:'block'
            })
        })

        $('#Interior_box2').mouseleave(function (){

            $('#btn2').css({
                opacity:'0'
            })
            $('#arrow2').css({
                display:'none'
            })
        })

        $('#Interior_box3').hover(function (){

            $('#btn3').css({
                opacity:'1'
            })
            $('#arrow3').css({
                display:'block'
            })
        })

        $('#Interior_box3').mouseleave(function (){

            $('#btn3').css({
                opacity:'0'
            })
            $('#arrow3').css({
                display:'none'
            })
        })

        $('#Interior_box4').hover(function (){

            $('#btn4').css({
                opacity:'1'
            })
            $('#arrow4').css({
                display:'block'
            })
        })

        $('#Interior_box4').mouseleave(function (){

            $('#btn4').css({
                opacity:'0'
            })
            $('#arrow4').css({
                display:'none'
            })
        })

        $('#Interior_box5').hover(function (){

            $('#btn5').css({
                opacity:'1'
            })
            $('#arrow5').css({
                display:'block'
            })
        })

        $('#Interior_box5').mouseleave(function (){

            $('#btn5').css({
                opacity:'0'
            })
            $('#arrow5').css({
                display:'none'
            })
        })

    }



})
