let balance = 35;
let isActive = false;
let checkBalance = true;


if (checkBalance === true) {
	if (isActive === true && balance > 0) {
		console.log("Your balance is $" + balance + ".");
	}
	else if (isActive === true && balance === 0) {
		console.log("Your account is empty.");
	}
	else if (isActive === true && balance < 0) {
		console.log("Your balance is negative. Please contact bank.");
	}
	else if (isActive === false) {
		console.log("Your account is no longer active.");
	}
} else {
	console.log("Thank you. Have a nice day.");
}