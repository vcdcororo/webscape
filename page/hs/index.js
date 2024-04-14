const cubeContainer = document.getElementById('cube-container');
let rotationX = 0;
let rotationY = 0;
let autoRotate = false;

function updateCubeTransform() {
    cubeContainer.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

function Left() {
    rotationY -= 45;
    updateCubeTransform();
}

function Right() {
    rotationY += 45;
    updateCubeTransform();
}

function Up() {
    rotationX -= 45;
    updateCubeTransform();
}

function Down() {
    rotationX += 45;
    updateCubeTransform();
}

function startRotation() {
    autoRotate = true;
    rotateAutomatically();
}

function stopRotation() {
    autoRotate = false;
}

function rotateAutomatically() {
    if (autoRotate) {
        rotationY += 0.5;
        updateCubeTransform();
        requestAnimationFrame(rotateAutomatically);
    }
}


let password = '';

function appendNumber(number) {
    if (password.length < 6) {
        password += number;
        updatePasswordInput();
    }
}

function clearPassword() {
    password = '';
    updatePasswordInput();
}

function submitPassword() {
    console.log('Submitted Password:', password);
    if (password === '231029') {
        showOverlay('정답입니다~' );
    } else {
        WrongOverlay('다시 시도해주세요'); 
    }
}

function updatePasswordInput() {
    document.getElementById('password-input').value = password;
    document.getElementById('website-link').setAttribute('href', '../ksm/index.html'); // 다음 분  웹사이트 링크
    document.getElementById('password-value').innerText = password;
}

function showOverlay(message) {
    document.getElementById('alert-message').innerText = message;
    document.getElementById('overlay').style.display = 'flex';
    var backgraoundMusic = document.getElementById('backgroundMusic');
            backgroundMusic.volume = 0.2;
}

function WrongOverlay(message) {
    var overlay = document.getElementById('overlay');
    var alertMessage = document.getElementById('alert-message');
    var websiteLink = document.getElementById('website-link');

    alertMessage.innerText = message;

    websiteLink.removeAttribute('href');

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    overlay.style.display = 'flex';
}



function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}


function toggleExplanation() {
    var explanationBox = document.getElementById("ex");
    var overlay = document.getElementById("over");


    var computedStyle = window.getComputedStyle(explanationBox);

    if (computedStyle.display === "none") {
      
        explanationBox.style.display = "block";
       
        overlay.style.display = "block";
    } 
}

document.querySelector('.ex').addEventListener('click', function() {
    document.querySelectorAll('.ex, .over').forEach(function(element) {
        element.style.display = 'none';
    });
});


function Reveal() {
    let q2Element = document.querySelector('.second');
    q2Element.style.display = 'block';
}

function reveal_F() {
    let q1Element = document.querySelector('.first');
    q1Element.style.display = 'block';
}

var backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.play();