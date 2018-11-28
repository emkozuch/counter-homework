(function () {

    document.getElementById("btn-container").addEventListener("click", changeNumber());

    function changeNumber() {
        var addButton = document.getElementById("add");
        var subButton = document.getElementById("substract")
        var value = 0;

        addButton.addEventListener("click", function () {
            value += 1;
            document.getElementById("counter").innerHTML = value;
        })
        subButton.addEventListener("click", function () {
            value -= 1;
            document.getElementById("counter").innerHTML = value;
        })
    }



}());

