$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();
		// capture inputs
		var a = parseInt($("#firstNumber").val());
		var b = parseInt($("#secondNumber").val());

		$(".x").text(a);
		$(".y").text(b);

		var plus = addition(a, b);
		var times = multiply(a, b);
		var minus = subtraction(a, b);
		var over = divide(a, b);

		$("#addition .z").text(plus);
		$("#multiply .z").text(times);
		$("#subtract .z").text(minus);
		$("#divide .z").text(over);

	})
});

function addition(a, b) {
	var plus = (a + b);
	return plus;
}

function multiply(a, b) {
	var times = (a * b);
	return times;
}

function subtraction(a, b) {
	var minus = (a - b);
	return minus;
}

function divide(a, b) {
	var over = (a / b);
	return over;
}
