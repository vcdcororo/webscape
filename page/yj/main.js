// 페이지가 로드될 때 실행되는 함수
window.onload = function() {
    // 요소를 나타나게 함
    var element = document.querySelector(".info");
    var title = document.querySelector(".title");
    var scale = document.querySelector(".scale");
    var fullsound = document.querySelector(".backgroundmusic")
    
    title.classList.add ('scale');

   
    // element.classList.
    
    // 클릭 이벤트 처리
//     document.addEventListener("scroll", function() {
//       // 요소를 사라지게 함
//       if (window.scrollY > 50) {
//         element.classList.add("hidden");
//       }
//       else {
//         element.classList.remove("hidden");
//       }
//     //   element.style.display = "none";
//     });
//   };

//   window.addEventListener('scroll', function(){
//     console.log('info')
//   });
element.addEventListener("click", function() {
    // 요소를 사라지게 함

    element.classList.add("hidden");
    fullsound.play();

  //   element.style.display = "none";
  });
};



//   // 페이지가 로드될 때 실행되는 함수
// window.onload = function() {
//     var element = document.getElementById("info");
  
//     // 스크롤 이벤트 감지
//     window.addEventListener("scroll", function() {
//       // 요소가 화면 위쪽으로 스크롤되면 투명하게 함
//       if (window.scrollY > 100) { // 이 값은 스크롤 위치에 따라 조정 가능
//         element.style.opacity = "0";
//       } else {
//         // 스크롤이 다시 위쪽으로 올라오면 다시 보이게 함
//         element.style.opacity = "1";
//       }
//     });
//   };
  



const door1 = document.getElementById('door__1');
const door2 = document.getElementById('door__2');
const door3 = document.getElementById('door__3');
const door4 = document.getElementById('door__4');
const door5 = document.getElementById('door__5');
const door6 = document.getElementById('door__6');
const door7 = document.getElementById('door__7');
const door8 = document.getElementById('door__8');
const door9 = document.getElementById('door__9');
const door10 = document.getElementById('door__10');
const door11 = document.getElementById('door__11');
const door12 = document.getElementById('door__12');
const door13 = document.getElementById('door__13');
const door14 = document.getElementById('door__14');
const door15 = document.getElementById('door__15');
const door16 = document.getElementById('door__16');
const doorfail = document.getElementById('door__fail');
const doorfail2 = document.getElementById('door__fail2');
const doorfail3 = document.getElementById('door__fail3');



const hidden = document.querySelector("hidden");
console.log(door1);

const sound = document.querySelector(".buttonsound");
const endsound = document.querySelector(".buttonsound_2");
const move = document.querySelector(".move");

door1.addEventListener("click",function() {
    sound.play();
    door1.classList.add ('hidden');
    door2.classList.remove ('hidden');
})
door2.addEventListener("click",function() {
    sound.play();
    door2.classList.add ('hidden');
    door3.classList.remove ('hidden');
})
door3.addEventListener("click",function() {
    sound.play();
    door3.classList.add ('hidden');
    door4.classList.remove ('hidden');
})
door4.addEventListener("click",function() {
    sound.play();
    door4.classList.add ('hidden');
    door5.classList.remove ('hidden');
})
door5.addEventListener("click",function() {
    sound.play();
    door5.classList.add ('hidden');
    door6.classList.remove ('hidden');
})
door6.addEventListener("click",function() {
    sound.play();
    door6.classList.add ('hidden');
    door7.classList.remove ('hidden');
})
door7.addEventListener("click",function() {
    sound.play();
    // door7.classList.add ('hidden');
    // door8.classList.remove ('hidden');
})
door8.addEventListener("click",function() {
    sound.play();
    door8.classList.add ('hidden');
    door9.classList.remove ('hidden');
})
door9.addEventListener("click",function() {
    sound.play();
    door9.classList.add ('hidden');
    door10.classList.remove ('hidden');
})
door10.addEventListener("click",function() {
    endsound.play();
    door10.classList.add ('hidden');
    doorfail.classList.remove ('hidden');
})
door11.addEventListener("click",function() {
    sound.play();
    door11.classList.add ('hidden');
    door12.classList.remove ('hidden');
})
door12.addEventListener("click",function() {
    sound.play();
    door12.classList.add ('hidden');
    door13.classList.remove ('hidden');
})
door13.addEventListener("click",function() {
    sound.play();
    door13.classList.add ('hidden');
    door14.classList.remove ('hidden');
})
door14.addEventListener("click",function() {
    endsound.play();
    door14.classList.add ('hidden');
    doorfail2.classList.remove ('hidden');
})
door15.addEventListener("click",function() {
    sound.play();
    door15.classList.add ('hidden');
    door16.classList.remove ('hidden');
})
door16.addEventListener("click",function() {
    endsound.play();
    door16.classList.add ('hidden');
    doorfail3.classList.remove ('hidden');
})

doorfail.addEventListener("click",function() {
    endsound.play();
    doorfail.classList.add('move')
    doorfail.classList.add('notHover')

    setTimeout(function() {
        doorfail.classList.remove('move');
    }, 700);
})
doorfail2.addEventListener("click",function() {
    endsound.play();
    doorfail2.classList.add('move')
    doorfail2.classList.add('notHover')

    setTimeout(function() {
        doorfail2.classList.remove('move');
    }, 700);
})
doorfail3.addEventListener("click",function() {
    endsound.play();
    doorfail3.classList.add('move')
    doorfail3.classList.add('notHover')

    setTimeout(function() {
        doorfail3.classList.remove('move');
    }, 700);
})

