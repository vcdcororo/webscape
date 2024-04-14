document.addEventListener('DOMContentLoaded', function() {
    var tooltip = document.querySelector('.custom-tooltip');

    document.addEventListener('click', function(event) {
        tooltip.style.display = 'block'; // 기존 툴팁 숨기기
    });

    document.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY + window.innerHeight;
        var documentHeight = document.body.scrollHeight;

        if (scrollPosition >= documentHeight) {
            tooltip.textContent = "It's time to wake up";
            tooltip.style.display = 'block';
        } else {
            tooltip.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            tooltip.style.display = 'none';
        }
    });
});
