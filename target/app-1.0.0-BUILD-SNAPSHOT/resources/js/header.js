$(document).ready(function () {
  //호버하면 카테고리 나오는 함수
  function ho_slide() {
    $(".bottom_nav_ul > li.box , .menu_box").mouseenter(function () {
      $(".menu_box").addClass("menu_active");
      if (!$(this).hasClass("menu_active")) {
        $(".ul_category_box").stop().fadeOut(300);
        $(".ul_category_box").eq($(this).index()).stop().fadeIn(300);
      }
    });
    $(".bottom_nav_ul > li, .menu_box").mouseleave(function () {
      $(".menu_box").removeClass("menu_active");
    });
  }
  //호버하면 밑줄 나오는 함수
  function ho_underLine() {
    $(".bottom_nav_ul > li , .ul_category_box").mouseenter(function () {
      if (!$(this).hasClass("txt_underline")) {
        $(".bottom_nav_ul > li").removeClass("txt_underline");
        $(".bottom_nav_ul > li").eq($(this).index()).addClass("txt_underline");
      }
    });
    $(".bottom_nav_ul > li , .menu_box").mouseleave(function () {
      $(".bottom_nav_ul>li").removeClass("txt_underline");
    });
  }
  //색 반전 함수
  function inversion(h_bg, logo_bg, at_bg, br_bg) {
    //헤더 색반전
    $(".header").css({
      background: h_bg,
    });
    //로고 이미지 바꾸기
    $(".logo > img").attr("src", logo_bg);
    //탑 네비 색반전
    $(".top_nav_ul").css({
      color: at_bg,
    });
    //서치 아이콘 이미지 바꾸기
    $("#search_icon > svg").css({
      fill: at_bg,
    });
    //바텀네비 색반전
    $(".header_bottom").css({
      color: at_bg,
      borderTop: br_bg,
      borderBottom: br_bg,
    });
  }
  // 헤더에 호버하면 색반전 되는 함수
  // $('.header').mouseenter(function(){
  //     inversion('#000','img/logo_white.png','#fff','3px solid #fff')
  // })
  // $('.header').mouseleave(function(){
  //     inversion('rgba(0,0,0,0.1)','img/logo_black.png','#000','3px solid #000')
  // })

  // 서치 아이콘 클릭하면 아래에 서치바 나오는 함수
  function cl_blockSearchBox() {
    $("#search_icon").click(function () {
      $(".search_box").css({
        display: "block",
      });
    });
  }
  //서브 카테고리 호버하면 호버된 제목 색 변경 되는 함수
  function ho_subChRed(ho_box, ch_box, cur_color, ch_color) {
    $(ho_box).mouseenter(function () {
      // console.log($(this).index())
      $(ch_box).css({ color: cur_color });
      $(ch_box).eq($(this).index()).css({ color: ch_color });
    });
    $(".ca_box").mouseleave(function () {
      $(ch_box).css({ color: cur_color });
    });
  }
  //호버하면 색상 변경에 변경
  function ho_topNavRed() {
    $(".top_nav_ul > li").mouseenter(function () {
      if (!$(this).hasClass("ho_red")) {
        $(".top_nav_ul > li").removeClass("ho_red");
        $(".top_nav_ul > li").eq($(this).index()).addClass("ho_red");
      }
    });
    $(".top_nav_ul").mouseleave(function () {
      $(".top_nav_ul > li").removeClass("ho_red");
    });
  }
  function stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  //스크롤 내려가면 헤더 메뉴 고정 -- 헤더이미지 작은걸로
  function scr_fixed() {
    let h_top = $(".header").offset().top + 100;
    $(window).scroll(function () {
      let s_top = $(window).scrollTop();
      // console.log(h_top,s_top)
      if (h_top <= s_top) {
        inversion(
          "#000000e6",
          "img/headerImg/logo_white.png",
          "#ffffffe6",
          "3px solid #ffffffe6"
        );
        $(".h_100").css({
          height: 200,
        });
        $(".header").css({
          position: "fixed",
        });
        $(".header_top").css({
          height: 50,
        });
      } else {
        inversion(
          "#ffffffe6",
          "img/headerImg/logo_black.png",
          "#000000e6",
          "3px solid #000000e6"
        );
        $(".h_100").css({
          height: 0,
        });
        $(".header").css({
          position: "relative",
        });
        $(".header_top").css({
          height: 150,
        });
      }
    });
  }
    }
    //스크롤 내려가면 헤더 메뉴 고정 -- 헤더이미지 작은걸로 
    function scr_fixed() {
        let h_top = $('.header').offset().top + 100;
        $(window).scroll(function(){
            let s_top = $(window).scrollTop();
            // console.log(h_top,s_top)
            if(h_top <= s_top){
                inversion('#000000e6',logoWhite,'#ffffffe6','3px solid #ffffffe6')
                $('.h_100').css({
                    height: 200
                })
                $('.header').css({
                    position: 'fixed'
                });
                $('.header_top').css({
                    height: 50
                });
            }else{
                inversion('#ffffffe6',logoBlack,'#000000e6','3px solid #000000e6')
                $('.h_100').css({
                    height: 0
                })
                $('.header').css({
                    position: 'relative'
                });
                $('.header_top').css({
                    height: 150
                });
            };
            
        });
       
    }
  ho_slide();
  ho_underLine();
  cl_blockSearchBox();
  ho_subChRed(".ca_box", ".ca_txt", "#fff", "red");
  ho_topNavRed();
  scr_fixed();



  $(".search_btn").on("click", ()=> {
    console.log("클릭감지");
    let frm = $('form[name="search"]');
    frm.attr('action', "/search?page=${page}&pageSize=${pageSize}&search=" + $('input[name="search"]').val().trim());
    frm.attr('method', 'get');
    frm.submit();
  });
  $(".search_bar").on("keydown", () => {
    if (window.event.keyCode == 13) {
      window.event.preventDefault();
      $(".search_btn").trigger('click');
    }
  });
  });



// function searchPost() {
//   // let src = $(".search_bar").val();
//   // let form = document.createElement("form");
//   // let hidden = document.createElement("input");
//   // hidden.setAttribute("type", "hidden");
//   // hidden.setAttribute("name", "keyword");
//   // hidden.setAttribute("value", src);
//   // form.appendChild(hidden);
//   // console.log(src);
//   // form.setAttribute("method", "post");
//   // form.setAttribute("action", "/search");
//   // document.body.appendChild(form);
//   // form.submit();
// }
