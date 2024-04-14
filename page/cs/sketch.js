startSuyeon();

function startSuyeon(){
  durationSY=0;
  if (durationSY >= 8) {
    // 8 이상일 때 실행할 작업을 여기에 추가
    console.log('durationSY가 8 이상입니다. 함수를 실행합니다.');
    getOrangeDropImg();
    showOrangeDropImg();
    // 작업을 마치면 함수들을 호출하지 않도록 return
    return;
  }

  // durationSY가 8 미만인 경우 아래의 함수들을 호출
  showOrangeJuice();
};

function getImageSrcSY (){
  var imageSrc = '../webcollage/img/02_sy/orangejuice.jpg' ;
  return imageSrc;
}
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(showOrangeJuice, 2000);
});

//마우스위치에 따른 오렌지 이미지 위치 반응
function showOrangeJuice() {
  var orangeJuice = document.querySelector('.juice');
  orangeJuice.style.display = 'block';

  document.addEventListener('mousemove', moveOrangeJuice);
  document.addEventListener('click', fixOrangeJuice);
  showOrangeJuiceRe()
}

function moveOrangeJuice() {
  var orangeJuice = document.querySelector('.juice');
  var container = document.querySelector('.container');

  var offsetX = clientX - container.offsetLeft;
  var offsetY = clientY - container.offsetTop;

  orangeJuice.style.left = offsetX + 'px';
  orangeJuice.style.top = offsetY + 'px';
}

//반대로 따라다니는 이미지(위치 계산)
function showOrangeJuiceRe() {
  var orangeJuice = document.querySelector('.Reversejuice');
  orangeJuice.style.display = 'block';

  document.addEventListener('mousemove', moveOrangeJuiceRe);
  document.addEventListener('click', fixOrangeJuiceRe);
}

function moveOrangeJuiceRe(event) {
  var imageElement = document.querySelector('.Reversejuice');
  var containerElement = document.querySelector('.container');

  // 마우스의 현재 위치
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // 컨테이너 요소의 가로, 세로 중앙 위치
  var containerCenterX = containerElement.offsetWidth / 2;
  var containerCenterY = containerElement.offsetHeight / 2;

  // 이미지 위치 계산
  var ReverseX = containerCenterX - (mouseX - containerCenterX);
  var ReverseY = containerCenterY - (mouseY - containerCenterY);

  // 이미지 위치 설정
  imageElement.style.left =  ReverseX + 'px';
  imageElement.style.top = ReverseY + 'px';
}


//클릭 시 오렌지 이미지 드롭
function fixOrangeJuice(event) {
  var imageElement = document.createElement('img');
  var offsetX = event.clientX;
  var offsetY = event.clientY;
  imageElement.src = getImageSrcSY();
  imageElement.classList.add('ImgSize10');
  imageElement.style.position = 'fixed';
  imageElement.style.left = offsetX + 'px';
  imageElement.style.top = offsetY + 'px';
  document.body.appendChild(imageElement);

}

function fixOrangeJuiceRe(event) {
  var imageElement = document.createElement('img');
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var ReverseX = WindowHeight - (mouseX);
  var ReverseY = WindowWidth - (mouseY);
  imageElement.src = getImageSrcSY();
  imageElement.classList.add('ImgSize10');
  imageElement.style.position = 'fixed';  
  imageElement.style.left =  ReverseX + 'px';
  imageElement.style.top = ReverseY + 'px';
  document.body.appendChild(imageElement);

}

//음악 재생 이후 일정 시간 이후 마우스가 움직이는 동선을 따라 오렌지 방울 드롭
const OrangeDropImg = [];

for (let i = 1; i <= 27; i++) {
  const imagePath = `../webcollage/img/02_sy/assets/sy_drop${i}.png`;
  OrangeDropImg.push(imagePath);
  console.log(OrangeDropImg);
}

function getOrangeDropImg(){
  // 이미지 배열에서 랜덤한 인덱스 선택
  const randomIndex = Math.floor(Math.random() * OrangeDropImg.length);
  
  // 선택한 이미지 경로 가져오기
  const randomOrangeDropImg = OrangeDropImg[randomIndex];

  return randomOrangeDropImg;
}

function showOrangeDrop() {
  // 마우스 움직임을 감지하여 이미지 위치 업데이트
  document.addEventListener('mousemove', (e) => {
    if (OrangeDropImg) {
      // 현재 이미지가 존재하는 경우, 마우스 위치로 이미지 위치 업데이트
      OrangeDropImg.style.left = e.pageX + 'px';
      OrangeDropImg.style.top = e.pageY + 'px';
    }
  });

  // 페이지 로드 후 1초마다 랜덤 이미지 표시
  setInterval(showOrangeDropImg, 1000);

   // 3초마다 이미지 고정 및 교체
   setInterval(fixAndChangeImage, 3000);
};


function showOrangeDropImg() {
 // 현재 이미지 삭제 (이전 이미지가 있는 경우)
 if (currentImage) {
  document.body.removeChild(currentImage);
}

// 랜덤 이미지 경로 가져오기
const OrangeDropImg = getOrangeDropImg();

// 이미지 요소 생성 및 스타일 설정
const imageElement = document.createElement('img');
imageElement.src = OrangeDropImg;
imageElement.alt = 'Random Image';
imageElement.classList.add('random-image');

// 이미지를 페이지에 추가
document.body.appendChild(imageElement);

// 현재 이미지 업데이트
currentImage = imageElement;
}

var imageElement = document.querySelector('.OrangeDrop');
var containerElement = document.querySelector('.containerDrop');


function fixAndChangeImage() {
  // 이미지 고정 (현재 이미지가 있는 경우)
  if (currentImage) {
    clearTimeout(timer); // 타이머 제거
    timer = null;
  }

  // 랜덤 이미지 표시
  showRandomImage();

}

//음악 재생 이후 일정 시간 이후 클릭 시 랜덤 위치에 바 드롭
const randombar = [];

for (let i = 1; i <= 17; i++) {
  const imagePath = `../webcollage/img/02_sy/assets/sy_bar${i}.png`;
  randombar.push(imagePath);
}

function getImageSrcSYBar(){
  var imageSrc = '../webcollage/img/02_sy/02_suyeon_work.svg' ;
  return imageSrc;
}

function getRandomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function ShowSYBar() {
  var imageElement = document.createElement('img');
  var RandomX = getRandomPosition(0, WindowWidth-imageElement.offsetWidth);
  var RandomY = getRandomPosition(0, WindowHeight- imageElement.offsetHeight);
  imageElement.src = getImageSrcSYBar();
  imageElement.classList.add('ImgSize0');
  document.body.appendChild(imageElement);
  // 이미지 위치 설정
  imageElement.style.left = RandomX + 'px';
  imageElement.style.top = RandomY  + 'px';

  // 이미지 보이기
  imageElement.style.display = 'block';
}
