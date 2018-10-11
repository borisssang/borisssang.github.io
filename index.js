(() => {
    var mouseDown = false;
    var startX = 0;
    var currentX = 0;

    var todos = document.getElementsByClassName('todos')[0];
    todos.addEventListener('mousedown', (event) => {
        mouseDown = true;
        startX = event.clientX;
    });

    todos.addEventListener('mouseup', (event) => {
        mouseDown = false;
        var controls = getControls(event);
        //controls.style.marginRight = -controls.offsetWidth;
    });

    todos.addEventListener('mousemove', (event) => {
        if (!mouseDown) return;

        currentX = event.clientX;
        var diff = startX - currentX;
        if (diff > 0) {
            console.log(diff);
            var controls = getControls(event);
            var width = controls.offsetWidth;
            currentMargin = diff > width ? 0 : -width + diff;
            controls.style.marginRight = currentMargin + 'px';
        }
    });

    function getControls(event) {
        var todo = event.target.parentNode;
        var controls = todo.getElementsByClassName('controls')[0];
        return controls;
    }
})();
