function updateRate() {
	let rateval = document.getElementById("rate").value;
	let ratevalText = document.getElementById("rate_val");
	ratevalText.innerText = rateval;
}

function compute() {
	let result = document.getElementById("result");
	let principal = parseInt(document.getElementById("principal").value);
	let rate = parseFloat(document.getElementById("rate").value);
	let years = parseInt(document.getElementById("years").value);
    let yearInTheFuture = new Date().getFullYear() + years;
    let interest = (principal * years * rate) / 100;
    let amount = principal + interest;

	if (Number.isNaN(principal) || principal <= 0) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	} else {

        result.innerHTML = `
            If you deposit $<mark>${principal}</mark>,<br>
            at an interest rate of <mark>${rate}%.</mark><br>
            You will receive an amount of $<mark>${amount}</mark>,<br>
            in the year <mark>${yearInTheFuture}</mark>.<br>
        `;
    }

}