(function () {

    document.getElementById("btn-container").addEventListener("click", changeNumber());

    function changeNumber() {
        var addButton = document.getElementById("add");
        var subbbutton = document.getElementById("substract")
        var initialValue = 0;

        addButton.onclick = function () {
            initialValue += 1;
            document.getElementById("counter").innerHTML = initialValue;
        }
        addButton.onmousedown = function () {
            addButton.style.backgroundColor = "rgba(35, 80, 24, 0.5)";
        }
        addButton.onmouseup = function () {
            addButton.style.backgroundColor = "rgba(128, 15, 15, 0.1)";
        }

        subbbutton.onclick = function () {
            initialValue -= 1;
            document.getElementById("counter").innerHTML = initialValue;
        }
        subbbutton.onmousedown = function () {
            subbbutton.style.backgroundColor = "rgba(71, 22, 16, 0.5)";
        }
        subbbutton.onmouseup = function () {
            subbbutton.style.backgroundColor = "rgba(128, 15, 15, 0.1)";
        }
    }



}());

