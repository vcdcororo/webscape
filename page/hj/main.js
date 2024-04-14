document.addEventListener('DOMContentLoaded', function() {

    let randomText = "글에 숨겨진 특정 부분을 드래그해보세요. ";
    document.getElementById('randomText').innerText = randomText;

    document.getElementById('randomText').addEventListener('mouseup', function(e) {
        let selectedText = "";
        if (window.getSelection) {
            selectedText = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            selectedText = document.selection.createRange().text;
        }

        // 특정 텍스트 드래그 시 숨겨진 div 표시
        if (selectedText.includes("특정 부분")) {
            // 새로운 div 생성
            let newDiv = document.createElement('span');
            newDiv.id = "next-link"
            newDiv.innerHTML = "<a href=`#`>이동하세요!</a>";
            
            document.getElementById('randomText').appendChild(newDiv);
        }
    });
});
