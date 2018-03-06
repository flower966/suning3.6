window.onload=function(){
// 一键返回顶部
	let back=document.querySelector('.return');
    back.onclick=function () {
        // document.body.scrollTop=0;
        // document.documentElement.scrollTop=0;
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }

//  侧导航楼层跳转
    let floors=document.querySelectorAll('.ayy');
    let ch=document.documentElement.clientHeight;
    let navs=document.querySelectorAll('.cedanghang li');
//     顶层隐藏条
    let hidden=document.querySelector('.hidden');
    let trans=document.querySelector('.dajuhui');
    let cedao=document.querySelector('.nav_left')
    let out=true;
    let comein=false;
    let flag=true;
     window.onscroll=function () {
         let tops=document.body.scrollTop?
             document.body.scrollTop:document.documentElement.scrollTop;
         if(tops>=trans.offsetTop){
             if(out){
	                 out=false;
	                 cedao.style.opacity=1;
	                 animate(hidden,{top:0},function () {
                     comein=true;
                 });
             }

         }else if(comein){
	                 comein=false;
	                 cedao.style.opacity=0;
	                 animate(hidden,{top:-50},function () {
	                 out=true;
                 })
             }

         
         if(!flag){
             return;
         }

    floors.forEach(function (val,index) {
             if(tops>=val.offsetTop-ch+100){
                 navs.forEach(function (dom) {
                     dom.classList.remove('active1');
                 })
                 navs[index].classList.add('active1');
             }
         })
     }
//     点击侧导航
    navs.forEach(function (dom,b) {
        dom.onclick=function () {
            let t=floors[b].offsetTop;
            animate(document.body,{scrollTop:t},100);
            animate(document.documentElement,{scrollTop:t},100);
        }
    })

    // let ch=document.documentElement.clientHeight;
    // let floors=$('.ayy'); 
    // let navs=$('.cedanghang li');
    // let hidden=$('.hidden');
    // let trans=$('.dajuhui');
    // let cedao=$('.nav_left')
    // let out=true;
    // let comein=false;
    // let flag=true;
    // $(window).scroll(function () {
    //      let tops=document.body.scrollTop?
    //          document.body.scrollTop:document.documentElement.scrollTop;
    //      if(tops>=trans.offset().top){
    //          if(out){
    //                  out=false;
    //                  cedao.style.opacity=1;
    //                  animate(hidden,{top:0},function () {
    //                  comein=true;
    //              });
    //          }

    //      }else if(comein){
    //                  comein=false;
    //                  cedao.style.opacity=0;
    //                  animate(hidden,{top:-50},function () {
    //                  out=true;
    //              })
    //          }

         
    //      if(!flag){
    //          return;
    //      }

    // floors.forEach(function (val,index) {
    //          if(tops>=val.offsetTop-ch+100){
    //              navs.forEach(function (dom) {
    //                  dom.classList.remove('active1');
    //              })
    //              navs[index].classList.add('active1');
    //          }
    //      })
    //  }




// 选项卡

// let qq=document.querySelectorAll('.classify li');
// let ww=document.querySelectorAll('.xuan');
// qq.forEach(function(val,index){
//     val.onmouseover=function(){
//     ww.forEach(function(i,j){
//       i.classList.remove('activex');
//       ww[j].classList.remove('activex')  
//     })
//     qq[index].classList.add('activex')
//     ww[index].classList.add('activex')
//     }
//     val.onmouseout=function(){
//         qq[index].classList.remove('activex')
//         ww[index].classList.remove('activex')
//     }
//     ww[index].onmouseover=function(){
//         ww[index].classList.add('activex')
//     }
//     ww[index].onmouseout=function(){
//         ww[index].classList.remove('activex')
//     }
// })

$(".classify li").mouseenter(function(){
    let index=$(this).index();
    $(".xuan").removeClass('activex').eq(index).addClass('activex')
    $(".classify li").removeClass('activex').eq(index).addClass('activex')
})
$(".classify li").mouseleave(function(){
    let index=$(this).index();
    $(".xuan").filter('.activex').removeClass('activex')
    $(".classify li").filter('.activex').removeClass('activex')
    $(".xuan").eq(index).mouseenter(function(){
        $(this).addClass('activex')
    }).mouseleave(function(){
        $(this).removeClass("activex")
    });
});




// 大聚会
 
 // let chose=document.querySelectorAll('.dajuhui_top div.juhui');
 // let main=document.querySelectorAll('.dajuhui .dajuhui_bottom');
 // chose.forEach(function(value,index){
 // 	value.onmouseover=function(){
 // 		chose.forEach(function(a,b){
 // 			a.classList.remove('activej');
 // 			main[b].classList.remove('activej');
 // 		})
 // 		this.classList.add('activej');
 // 		main[index].classList.add('activej');
 // 	}
 // })

function xuanxiang(a,b){
    $(a).mouseenter(function(){
        let index=$(this).index();
        $(b).removeClass("activej").eq(index-1).addClass("activej")
        $(a).removeClass("activej").eq(index-1).addClass("activej")
    });
}
xuanxiang('.dajuhui_top div.juhui','.dajuhui .dajuhui_bottom')


// 排行榜
 // let a=0;
 // let b=0;
 // let danpin=document.querySelector('.square1');
 // let start=document.querySelectorAll('.big_zhipin');
 // let width1=parseInt(getComputedStyle(danpin,null).width);
 // document.querySelector('.zhi_left').onclick=function(){
 //    b=a-1;
 //    if(b<0){
 //        b=start.length-1;
 //    }
 //    start[b].style.left="100%";
 //    animate(start[a],{left:-width1});
 //    animate(start[b],{left:0});
 //    a=b;
 // }
 // document.querySelector('.zhi_right').onclick=function(){
 //    b=a+1;
 //    if(b>=start.length){
 //        b=0;
 //    }
 //    start[b].style.left="-100%";
 //    animate(start[a],{left:width1});
 //    animate(start[b],{left:0});
 //    a=b;
 // }


 let a=0;
 let b=0;
 let danpin=$('.square1');
 let start=$('.big_zhipin');
 let left=$('.zhi_left');
 let right=$('.zhi_right')
 function move(){
    b=a+1
    if(b>=start.length){
        b=0;
    }
    start.eq(b).css({left:"-100%"})
    start.eq(a).animate({left:"100%"});
    start.eq(b).animate({left:"0"});
    a=b
 }
 left.click(function(){
    b=a-1;
    if(b<0){
        b=start.length-1;
    }
    start.eq(b).css({left:"100%"})
    start.eq(a).animate({left:"-100%"});
    start.eq(b).animate({left:"0"});
    a=b
 })
 right.click(function(){
    move()
 });



// 视频
 let c=0;
 let d=0;
 let shipin=document.querySelector('.min_shipin');
 let xiao=document.querySelectorAll('.shipin_top_middle');
 let width2=parseInt(getComputedStyle(shipin,null).width);
 document.querySelector('.shipin_left').onclick=function(){
    d=c-1;
    if(d<0){
        d=xiao.length-1;
    }
    xiao[d].style.left="100%";
    animate(xiao[c],{left:-width2});
    animate(xiao[d],{left:0});
    c=d;
 }
 document.querySelector('.shipin_right').onclick=function(){
    d=c+1;
    if(d>=xiao.length){
        d=0;
    }
    xiao[d].style.left="-100%";
    animate(xiao[c],{left:width2});
    animate(xiao[d],{left:0});
    c=d;
 }
 

// let c=0;
// let d=0;
// let xiao=$('.shipin_top_middle');
// let sleft=$('.shipin_right')
// let sright=$('.shipin_right')
// function smove(){
//     d=c+1;
//     if(d>=xiao.length){
//         d=0;
//     }
//     xiao.eq(d).css({left:"-100%"}),
//     xiao.eq(c).animate({left:"100%"})
//     xiao.eq(d).animate({left:"0"})
//     c=d;
// }
// sleft.click(function(){
//     d=c-1;
//     if(d<0){
//         d=xiao.length-1;
//     }
//     xiao.eq(d).css({left:"100%"}),
//     xiao.eq(c).animate({left:"-100%"})
//     xiao.eq(d).animate({left:"0"})
//     c=d;
// })
// sright.click(function(){
//     smove()
// })

}















