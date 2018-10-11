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

    todos.addEventListener('mouseout', (event) => {
        mouseDown = false;
    });

    todos.addEventListener('mousemove', (event) => {
        if (!mouseDown) return;

        currentX = event.clientX;
        var diff = startX - currentX;
        var controls = getControls(event);
        if (diff > controls.offsetWidth / 2) {
            controls.style.removeProperty('margin-right');
            controls.classList.add('visible');
        } 
        else if (diff > 0 && !controls.classList.contains('visible')) {   
            var width = controls.offsetWidth;
            var margin = diff > width ? 0 : -width + diff;
            controls.style.marginRight = margin + 'px';
        }
        else if (diff < -controls.offsetWidth / 2) {
            controls.style.removeProperty('margin-right');
            controls.classList.remove('visible');
        }
        else if (diff < 0) {
            var width = controls.offsetWidth;
            var margin = diff < -width ? -width : diff;
            controls.style.marginRight = margin + 'px';
        }
    });

    function getControls(event) {
        var todo = event.target.parentNode;
        var controls = todo.getElementsByClassName('controls')[0];
        return controls;
    }
})();
