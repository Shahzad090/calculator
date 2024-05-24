function getNumber(num) {
  var result = document.getElementById("result");

  result.value += num;
}

function clearResult() {
    var result = document.getElementsByClassid("result")

    result.value =  "";
}

function getResult() {
  var result = document.getElementsByClassid("clearBtn")
    console.log(result)
}