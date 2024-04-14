// 미션창
// mission 요소 선택
var mission = document.getElementById('mission');

// mission 요소에 클릭 이벤트 리스너 추가
mission.addEventListener('click', function() {
    // mission 요소 숨기기
    mission.style.display = 'none';
});

// 스크립트창
// 클릭 포인트 요소 선택
var clickPoints = document.querySelectorAll('.clickPoint');

// 이벤트 요소 선택
var events = document.querySelectorAll('.event');

// 이벤트 요소를 모두 숨기는 함수
function hideAllEvents() {
    events.forEach(function(event) {
        event.style.display = 'none';
    });
}

// 각 클릭 포인트에 대한 이벤트 리스너 추가
clickPoints.forEach(function(clickPoint, index) {
    clickPoint.addEventListener('click', function() {
        // 모든 이벤트 요소를 숨기고
        hideAllEvents();
        // 해당하는 이벤트 요소 보이기
        events[index].style.display = 'block';
    });
});

// 각 이벤트 요소에 대한 이벤트 리스너 추가 (클릭 시 숨기기)
events.forEach(function(event) {
    event.addEventListener('click', function() {
        event.style.display = 'none';
    });
});

//결과창
// event11 요소 선택
var event11 = document.getElementById('event11');

// complete 요소 선택
var complete = document.getElementById('complete');

// #clickPoint11 클릭 횟수를 저장하는 변수
var clickCount = 0;

// #clickPoint11 클릭 이벤트 리스너 추가
document.getElementById('clickPoint11').addEventListener('click', function() {
    // 클릭 횟수 증가
    clickCount++;
    // 클릭 횟수가 1이면 event11 요소를 표시
    if (clickCount === 1) {
        event11.style.display = 'block';
    }
    // 클릭 횟수가 2이면 event11 요소를 숨기고 complete 요소를 표시
    else if (clickCount === 2) {
        event11.style.display = 'none';
        complete.style.display = 'block';
    }
});




