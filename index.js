Let btn = document.getElementByid("btn");

btn.addEventListener("click", myFunction);

function myFunction() {
document.getElementById("input1").innerHTML = "";
document.getElementById("input2").innerHTML = "";
document.getElementById("input3").innerHTML = "";
document.getElementById("input4").innerHTML = "";
}

 function resetForm() {
		document.getElementById("myForm").reset();
	}
