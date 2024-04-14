const reveal = document.querySelector('.reveal');
        const button = document.querySelector('.button');

        function onOff() {
            console.log('clicked');
            if (button.value === 'on') {
                reveal.style.display = 'block';
                button.value = 'off';
            }
            else {
                reveal.style.display = 'none';
                button.value = 'on';
            }
        }
        


        navigator.mediaDevices.getUserMedia({
            video: {
                width: { exact: 1 },
                height: { exact: 1 }
            }
        })
        .then(function (stream) {
            // Set stream for the first video element
            document.getElementById('webcam1').srcObject = stream.clone();

            // Set stream for the second video element
            document.getElementById('webcam2').srcObject = stream.clone();

            // Set stream for the third video element
            document.getElementById('webcam3').srcObject = stream.clone();
        })

        .catch(function (error) {
            console.error('Error accessing webcam:', error);
        });