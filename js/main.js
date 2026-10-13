document.getElementById("my_form").onsubmit = function() {
    var my_input = document.getElementById("data").value
    var result = document.getElementById("result")

    if (my_input == "") {
        result.innerHTML = "Enter A Number"
    } else if (isNaN(my_input)) {
        result.innerHTML = "Enter Only Numbers Not Letters"
    } else if (Number(my_input) < 0 ) {
        result.innerHTML = "Enter Positive Number"
    } else if (Number(my_input) == 0 ) {
        result.innerHTML = "Enter Number Bigger than zero"
    } else {
        result.innerHTML = my_input * 50 + " $"
    }

    return false
}