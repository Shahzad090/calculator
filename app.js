function getNumber(num) {
  var result = document.getElementById("result");

  result.value += num;
}

function clearResult() {
    var result = document.getElementsByid("result")

    result.value =  "";
}

function getResult() {
  var result = document.getElementsByid("clearBtn")
    console.log(result)
}